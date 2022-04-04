import Memes from "./components/Memes";
import { useState } from "react";
import InputText from "./components/InputText";

// button -> 랜덤한 meme 이미지 얻고 출력하기
// ! 버튼에서 랜덤한 수를 출력할 수 있어야 함.
// text
// 상단 하단 텍스트로 구분해서 선택된 이미지 위에 올리기

function App() {
  const [randomNum, setRandomNum] = useState(Math.trunc(Math.random() * 99));
  return (
    <div>
      <button onClick={() => setRandomNum(Math.trunc(Math.random() * 99))}>GIVE ME A MEME</button>
      <InputText />
      <Memes memeNum={randomNum} />
    </div>
  );
}

export default App;
