"use strict";

// 기능
// - 각 Picker를 눌렀을 때 Pick -> 랜덤한 숫자로 바뀌기 (1-9)

// goal에 1-9까지의 목표 값 할당하기
const goalNumber = document.querySelector(".goal");
const picker = document.querySelectorAll(".picker");
const againBtn = document.querySelector(".again");
const titleBlur = document.querySelector(".blur");

const goalRandomNumber = function () {
  goalNumber.textContent = Math.trunc(Math.random() * 9 + 1);
};

goalRandomNumber();

for (let i = 0; i < picker.length; i++) {
  const generateRandomNumber = Math.trunc(Math.random() * 9 + 1);
  picker[i].classList.remove("picked");
  picker[i].addEventListener("click", function () {
    titleBlur.classList.remove("blur");
    picker[i].textContent = generateRandomNumber;
    picker[i].classList.add("picked");
    if (generateRandomNumber === Number(goalNumber.textContent)) {
      alert("You Win!");
      location.reload();
    }
  });
}

// 버튼을 눌렀을 때, pick이 아닌 상태에 있는 것들을 다시 pick으로 되돌린다.
againBtn.addEventListener("click", function () {
  goalRandomNumber();
  titleBlur.classList.add("blur");
  for (let i = 0; i < picker.length; i++) {
    if (picker[i].classList.contains("picked")) {
      picker[i].classList.remove("picked");
      picker[i].textContent = "pick";
    }
  }
});
