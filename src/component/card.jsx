export default function Card({ url, art, source, tag, desc, nsfw }) {
  return (
    <div className="w-96 bg-gray-800 rounded-lg shadow-lg p-4">
      <img src={url} alt="Waifu" className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-bold mb-2">{art?.name}</h2>
      <p className="text-gray-400 mb-2">Source: {source}</p>
      <p className="text-gray-400 mb-2">Tags: {tag}</p>
      <p className="text-gray-400 mb-2">Description: {desc}</p>
      <p className="text-gray-400 mb-2">NSFW: {String(nsfw)}</p>
    </div>
  );
}
