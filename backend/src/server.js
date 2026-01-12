import express from "express";
import cors from "cors";
import ytdl from "@distube/ytdl-core";

const app = express();

  // Increase security and flexibility with CORS
  app.use(cors({
    origin: "http://localhost:5173", // Allow your Vite frontend
    exposedHeaders: ["Content-Disposition"]
  }));
  app.use(express.json());

  app.post("/api/download", async (req, res) => {
    const { url } = req.body;

    if (!url || !ytdl.validateURL(url)) {
      return res.status(400).json({ error: "Invalid YouTube URL" });
    }

    try {
      // 1. Fetch Video Info (Title, Available formats)
      const info = await ytdl.getInfo(url);
      const title = info.videoDetails.title.replace(/[^\x00-\x7F]/g, ""); // Clean special chars
      
      // 2. Set Headers
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${title}.mp4"`
      );
      res.setHeader("Content-Type", "video/mp4");

      // 3. Stream the video
      // 'highestvideo' + 'highestaudio' usually requires ffmpeg, 
      // so we use 'highest' which is the best single-file format (usually 720p).
      const stream = ytdl(url, {
        quality: "highest",
        filter: "audioandvideo", // Ensures we get a file that actually plays
      });

      // 4. Error handling on the stream itself
      stream.on("error", (err) => {
        console.error("Stream error:", err);
        if (!res.headersSent) {
          res.status(500).json({ error: "Streaming failed" });
        }
      });

      stream.pipe(res);

    } catch (err) {
      console.error("Download error:", err);
      res.status(500).json({ error: "Server error while processing video" });
    }
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});








// import express from "express"
// import cors from "cors"
// import ytdl from "@distube/ytdl-core"

// const app = express()
// app.use(cors())
// app.use(express.json())

// app.post("/api/download", async (req, res) => {
//   const { url } = req.body

//   if (!url || !ytdl.validateURL(url)) {
//     return res.status(400).json({ error: "Invalid YouTube URL" })
//   }

//   try {
//     res.setHeader(
//       "Content-Disposition",
//       'attachment; filename="video.mp4"'
//     )
//     res.setHeader("Content-Type", "video/mp4")

//     ytdl(url, {
//       quality: 18,
//       filter: format =>
//         format.container === "mp4" &&
//         format.hasVideo &&
//         format.hasAudio,
//     }).pipe(res)
//   } catch (err) {
//     console.error("Download error:", err)
//     res.status(500).json({ error: "Download failed" })
//   }
// })

// app.listen(5000, () => {
//   console.log("Server running on port 5000")
// })
