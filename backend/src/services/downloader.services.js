import ytdl from "@distube/ytdl-core";
import fs from "fs";
import path from "path";

// Load your cookies
const cookiesPath = path.resolve("src", "cookies.json");
let agent;

if (fs.existsSync(cookiesPath)) {
    const cookies = JSON.parse(fs.readFileSync(cookiesPath, "utf8"));
    agent = ytdl.createAgent(cookies); 
    console.log("✅ YouTube Agent created with cookies");
} else {
    console.warn("⚠️ No cookies.json found. 403 errors likely.");
}

export const streamYouTubeMedia = (url, type = "video", quality = "best") => {
    const options = {
        agent, // THIS IS THE FIX
        playerClients: ["IOS", "ANDROID", "TV"], // Skip "WEB" as it's being blocked
        quality: quality === "720p" ? 22 : "highest",
        filter: "audioandvideo"
    };

    if (type === "audio") {
        options.quality = "highestaudio";
        options.filter = "audioonly";
    }

    return ytdl(url, options);
};