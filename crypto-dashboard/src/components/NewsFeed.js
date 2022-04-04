import axios from "axios";
import { useEffect, useState } from "react";

function NewsFeed() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then((res) => setArticles(res.data))
      .catch((err) => console.log(err));
  }, []);
  const first7Articles = articles?.slice(0, 7); // 기사의 첫번째부터 7번째까지만 우선 불러온다. optional chaining
  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {first7Articles?.map((article, index) => (
        <div key={index}>
          <a href={article.url}>
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
