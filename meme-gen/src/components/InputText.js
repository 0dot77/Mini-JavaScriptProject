import { useState } from "react";

export default function TopText() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Write TOP Text"
          onChange={(text) => {
            setTopText(text.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Write BOTTOM Text"
          onChange={(text) => {
            setBottomText(text.target.value);
          }}
        />
      </form>
      <div className="text-container">
        <h1 className="text">{topText}</h1>
        <h1 className="text">{bottomText}</h1>
      </div>
    </div>
  );
}
