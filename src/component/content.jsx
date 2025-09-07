import { useState, useEffect } from "react";

export default function Content({ url, art, source, tag, desc, nsfw, w, h }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      setLoading(true);
    }
  }, [url]);

  return (
    <div className="lg:flex justify-center rounded-lg gap-6 break-words p-4">
      <div className="overflow-hidden flex-shrink-0 relative w-64">
        {loading && (
          <div className="absolute flex items-center justify-center bg-black w-64 h-full opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <circle cx="18" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  begin=".67"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                />
              </circle>
              <circle cx="12" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  begin=".33"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                />
              </circle>
              <circle cx="6" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  begin="0"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                />
              </circle>
            </svg>
          </div>
        )}
        <img
          src={url}
          key={url}
          onLoad={() => setLoading(false)}
          alt="Waifu"
          className={`h-full object-cover mb-4`}
        />
      </div>
      <div>
        {art?.name ? (
          <h2 className="text-4xl font-bold mb-4">Artist: {art.name}</h2>
        ) : null}
        <div className="mb-2 p-2 border rounded-lg ">
          {art?.twitter ? (
            <p className="text-gray-400 mb-2 text-wrap">Twitter/X: <a href={art.twitter} target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">{art.twitter}</a></p>
          ) : null}
          {art?.pixiv ? (
            <p className="text-gray-400 mb-2 text-wrap">Pixiv: <a href={art.pixiv} target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">{art.pixiv}</a></p>
          ) : null}
          {art?.deviant_art ? (
            <p className="text-gray-400 mb-2 text-wrap">Deviant Art: <a href={art.deviant_art} target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">{art.deviant_art}</a></p>
          ) : null}
          <p className="text-gray-400 text-wrap">Source: {source ? (<a href={source} target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">{source}</a>) : ("I don't know 😔😭")}</p>
        </div>
        <p className="text-gray-400 mb-2">NSFW: {nsfw ? "Yes" : "No"}</p>
        <p className="text-gray-400 mb-2">Tags: {tag}</p>
        <p className="text-gray-400 mb-2">Description: {desc}</p>
        <p className="text-gray-400">
          Resulution: {h} px x {w} px
        </p>
        <button onClick={() => {window.location.href = `https://waifu-src.vercel.app/api/download?url=${encodeURIComponent(url)}`}} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Download
        </button>
      </div>
    </div>
  );
}
