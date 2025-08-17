import { useState, useEffect, useRef } from "react";
import Tags from "./component/tags";
import Toggle from "./component/toggle";
import Content from "./component/content";

export default function App() {
  const [data, setData] = useState(null);
  const [nsfw, setNsfw] = useState(false);
  const [gif, setGif] = useState(false);
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [error, setError] = useState(null);

  const timeoutRef = useRef(null);

  function fetchApi({ skipDebounce = false, customParams = {} } = {}) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const doFetch = () => {
      setError(null);
      setData(null);

      const params = new URLSearchParams({
        is_nsfw: nsfw,
        gif: gif,
        ...(tag1 && { included_tags: tag1 }),
        ...(tag2 && { included_tags: tag2 }),
        ...customParams,
      });

      fetch(`https://api.waifu.im/search?${params.toString()}`)
        .then(async (res) => {
          if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            throw new Error(
              errData?.detail || `Error ${res.status}: ${res.statusText}`
            );
          }
          return res.json();
        })
        .then((data) => {
          if (data.images && data.images.length > 0) {
            setData(data.images[0]);
          } else {
            setError("No images found for this search.");
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    };

    if (skipDebounce) {
      doFetch();
    } else {
      timeoutRef.current = setTimeout(doFetch, 1000);
    }
  }

  useEffect(() => {
    fetchApi({ skipDebounce: true });
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-4xl font-bold mt-8">Waifu Search</p>

      <div className="grid grid-cols-2 border items-center justify-center w-full max-w-2xl p-4 mt-8 mb-6">
        <div className="flex items-center">
          <p>NSFW (18+)</p>
          <Toggle checked={nsfw} onChange={setNsfw} />
        </div>

        <div className="flex items-center">
          <p className="mr-4">Tags 1</p>
          <Tags value={tag1} onChange={setTag1} nsfw={nsfw} />
        </div>

        <div className="flex items-center">
          <p>GIF</p>
          <Toggle checked={gif} onChange={setGif} />
        </div>

        <div className="flex items-center">
          <p className="mr-4">Tags 2</p>
          <Tags value={tag2} onChange={setTag2} nsfw={nsfw} />
        </div>

        <button
          onClick={() => fetchApi({ skipDebounce: true })}
          className="col-span-2 bg-green-500 text-white rounded-lg hover:bg-green-600 px-4 py-2 mt-4"
        >
          Search
        </button>

        <button
          onClick={() => fetchApi()}
          className="col-span-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-4 py-2 mt-4"
        >
          Randomize
        </button>
        {error && <p className="col-span-2 text-red-500 mt-4">{error}</p>}
      </div>

      {data ? (
        <Content
          url={data.url}
          art={data.artist}
          source={data.source}
          tag={data.tags?.[0]?.name}
          desc={data.tags?.[0]?.description}
          nsfw={data.is_nsfw}
          h={data.height}
          w={data.width}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
