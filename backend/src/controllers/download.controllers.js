import ytdl from "@distube/ytdl-core";
import { streamYouTubeMedia } from "../services/downloader.services.js";

export const downloadMedia = async (req, res) => {
    try {
        const { url, type = "video", quality = "best" } = req.body;

        if (!url || !ytdl.validateURL(url)) {
            return res.status(400).json({ success: false, message: "Valid URL required" });
        }

        // 1. Get info to set the filename
        const info = await ytdl.getInfo(url);
        const safeTitle = info.videoDetails.title.replace(/[^\w\s]/gi, '');
        const extension = type === "audio" ? "mp3" : "mp4";

        // 2. Set headers so the browser knows to download it
        res.setHeader("Content-Disposition", `attachment; filename="${safeTitle}.${extension}"`);
        res.setHeader("Content-Type", type === "audio" ? "audio/mpeg" : "video/mp4");

        // 3. Start the stream passing through the server
        const stream = streamYouTubeMedia(url, type, quality);
        
        // This connects YouTube -> Your Server -> User's Browser
        stream.pipe(res);

        stream.on('error', (err) => {
            console.error("Streaming error:", err);
            if (!res.headersSent) res.status(500).send("Stream failed");
        });

    } catch (error) {
        console.error("CONTROLLER ERROR:", error);
        res.status(500).json({ success: false, message: "Download failed" });
    }
};

// import ytdl from "ytdl-core";

// export const downloadMedia = async (req, res) => {
//   try {
//     console.log("REQ BODY:", req.body);

//     const { url } = req.body;

//     // ❌ NO validation for now
//     console.log("URL RECEIVED:", url);

//     res.header(
//       "Content-Disposition",
//       `attachment; filename="video.mp4"`
//     );
//     res.header("Content-Type", "video/mp4");

//     ytdl(url, { quality: "highestvideo" })
//       .on("error", (err) => {
//         console.error("YTDL ERROR:", err);
//         res.status(500).end("Download stream error");
//       })
//       .pipe(res);

//   } catch (error) {
//     console.error("CONTROLLER ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };

