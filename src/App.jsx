import { useState, useEffect } from 'react'
import Tags from './component/tags'
import Toggle from './component/toggle'
import Card from './component/card';

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://api.waifu.im/search")
      .then(res => res.json())
      .then(data => {
        if (data.images && data.images.length > 0) {
          setData(data.images[0]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-4xl font-bold">Wife Search</p>
        <div className="flex items-center">
          <p>NSFW</p>
          <Toggle />
        </div>
        <Tags />
        <Card url={data.url} art={data.artist} source={data.source} tag={data.tags?.[0]?.name} desc={data.tags?.[0]?.description} nsfw={data.is_nsfw} />
        </div>
      </>
      )
}