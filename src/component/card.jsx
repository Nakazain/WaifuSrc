export default function Card({ url, art, source, tag, desc, nsfw, w, h }) {
  const handleDownload = async (url) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "waifu.jpg";
    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Gagal download:", error);
  }
};


  return (
    <div className="flex justify-center w-fit gap-6 p-4">
      <img src={url} alt="Waifu" className="h-full w-64 object-cover rounded-lg mb-4" />
      <div>
      <h2 className="text-4xl font-bold mb-4">Artist: {art?.name}</h2>
      <div className="mb-2 p-2 border rounded-lg ">
      <p className="text-gray-400 mb-2">Twitter/X: {art?.twitter}</p>
      <p className="text-gray-400 mb-2">Pixiv: {art?.pixiv}</p>
      <p className="text-gray-400 mb-2">Source: {source}</p>
      </div>
      <p className="text-gray-400 mb-2">NSFW: {nsfw ? "Yes" : "No"}</p>
      <p className="text-gray-400 mb-2">Tags: {tag}</p>
      <p className="text-gray-400 mb-2">Description: {desc}</p>
      <p className="text-gray-400">Resulution: {h} px x {w} px</p>
      <button onClick={handleDownload} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Download</button>
      </div>
    </div>
  );
}
