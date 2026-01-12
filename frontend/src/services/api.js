export const downloadVideo = async (url) => {
  const response = await fetch("http://localhost:5000/api/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  })

  if (!response.ok) throw new Error("Download failed")

  const blob = await response.blob()
  const downloadUrl = URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.href = downloadUrl
  a.download = "video.mp4"
  document.body.appendChild(a)
  a.click()

  a.remove()
  URL.revokeObjectURL(downloadUrl)
}
