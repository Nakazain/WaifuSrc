export default async function handler(req, res) {
  const imageUrl = req.query.url;

  if (!imageUrl) {
    return res.status(400).send("URL gambar diperlukan");
  }

  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return res.status(400).send("Gagal mengambil gambar");
    }

    const contentType = response.headers.get("content-type") || "application/octet-stream";

    let ext = "jpg";
    if (contentType.includes("png")) ext = "png";
    else if (contentType.includes("gif")) ext = "gif";
    else if (contentType.includes("webp")) ext = "webp";

    const buffer = Buffer.from(await response.arrayBuffer());

    res.setHeader("Content-Disposition", `attachment; filename=waifu.${ext}`);
    res.setHeader("Content-Type", contentType);
    res.send(buffer);

  } catch (err) {
    console.error("Error download:", err);
    res.status(500).send("Terjadi kesalahan saat mendownload");
  }
}
