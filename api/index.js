import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/download", async (req, res) => {
  const imageUrl = req.query.url;

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

    const buffer = await response.arrayBuffer();

    res.setHeader("Content-Disposition", `attachment; filename=waifu.${ext}`);
    res.setHeader("Content-Type", contentType);
    res.send(Buffer.from(buffer));

  } catch (err) {
    res.status(500).send("Terjadi kesalahan saat mendownload");
  }
});