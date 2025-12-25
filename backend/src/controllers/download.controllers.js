export const downloadMedia = async (req, res) => {
    try {

        const {url} = req.body;
        
        //validation
        if(!url){
            return res.status(400).json({
                success : false,
                message : " URL is required"
            });
        }

        if(!ytdl.validateURL(url)){
            return res.status(400).json({
                success : false,
                message : "Invalid URL"
            });
        }

        //fetch video info

        const info = await ytdl.video.getInfo(url);
        const title = info.videoDetails.title.replace(/[^\w\s]/gi, "");

        // force download
        res.header(
            "Content-Disposition",
            `attachment; filename="${title}.mp4"`
        );
        res.header("Content-Type", "video/mp4");

        // stream directly to client

        ytdl(url,{
            quality : "highestvideo",
        }).pipe(res);
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Video download failed",
        });
    }
};