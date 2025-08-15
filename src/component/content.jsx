export default function Content({ url, art, source, tag, desc, nsfw, w, h }) {

  return (
    <div className="flex justify-center w-fit gap-6 p-4">
      <img src={url} alt="Waifu" className="h-full w-64 object-cover rounded-lg mb-4" />
      <div>
      { art?.name ? <h2 className="text-4xl font-bold mb-4">Artist: {art.name}</h2> : null }
      <div className="mb-2 p-2 border rounded-lg ">
      { art?.twitter ? <p className="text-gray-400 mb-2">Twitter/X: {art.twitter}</p> : null }
      { art?.pixiv ? <p className="text-gray-400 mb-2">Pixiv: {art.pixiv}</p> : null}
      { art?.deviant_art ? <p className="text-gray-400 mb-2">Deviant Art: {art?.deviant_art}</p> : null }
      <p className="text-gray-400">Source: {source}</p>
      </div>
      <p className="text-gray-400 mb-2">NSFW: {nsfw ? "Yes" : "No"}</p>
      <p className="text-gray-400 mb-2">Tags: {tag}</p>
      <p className="text-gray-400 mb-2">Description: {desc}</p>
      <p className="text-gray-400">Resulution: {h} px x {w} px</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Download</button>
      </div>
    </div>
  );
}
