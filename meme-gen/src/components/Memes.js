import { useEffect, useState } from "react";

export default function Memes({ memeNum }) {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Meme data 받아오기
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((json) => {
        setMemes(json.data.memes);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <img className="img" src={memes[memeNum].url} alt={memes[memeNum].name} width="300px" height="300px" />
      ) : (
        <strong>Loading</strong>
      )}
    </div>
  );
}
