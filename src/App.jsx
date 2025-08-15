import { useState, useEffect } from 'react'
import Tags from './component/tags'
import Toggle from './component/toggle'
import Content from './component/content';

export default function App() {
  const [data, setData] = useState("");

  function fetchApi() {
    setTimeout(() => {
      fetch("https://api.waifu.im/search")
        .then(res => res.json())
        .then(data => {
          if (data.images && data.images.length > 0) {
            setData(data.images[0]);
          }
        })
        .catch(err => console.error(err));
    }, 1000);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-4xl font-bold mt-8">Wife Search</p>
        <div className="grid grid-cols-2 border items-center justify-center w-full max-w-2xl p-4 mt-8 mb-6">
          <div className="flex items-center">
            <p>NSFW (18+)</p>
            <Toggle />
          </div>
          <div className="flex items-center">
            <p className="mr-4">Tags 1</p>
            <Tags />
          </div>
          <div className="flex items-center">
            <p>GIF</p>
            <Toggle />
          </div>
          <div className="flex items-center">
            <p className="mr-4">Tags 2</p>
            <Tags />
          </div>
          <button className="col-span-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-4 py-2 mt-4">Search</button>
          <button onClick={fetchApi} className="col-span-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-4 py-2 mt-4">Randomize</button>
        </div>
        <Content url={data.url} art={data.artist} source={data.source} tag={data.tags?.[0]?.name} desc={data.tags?.[0]?.description} nsfw={data.is_nsfw} h={data.height} w={data.width} />
      </div>
    </>
  )
}