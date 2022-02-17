"use strict";
// DOM Elements
const year = document.querySelector(".year");
const dateSubmit = document.querySelector(".submit");
const monthRange = document.querySelector(".month-range");
const monthRangeVal = document.querySelector(".month-range__value");
const dayValue = document.querySelector(".day-value");
const result = document.querySelector(".result");
const againBtn = document.querySelector(".again-btn");

// DRY
const HIDDEN_CLASS = "hidden";

// 현재 시간 데이터 얻어오기
const date = new Date();
const seconds = 1000;
const minute = seconds * 60;
const hour = minute * 60;
const day = hour * 24;

let submitCheck = false;

// 현재 연도 표기
year.textContent = `${date.getFullYear()}년`;

// - 페이지가 로드 되었을 때 기본 위치로 초기화
monthRangeVal.textContent = `${monthRange.value}월`;
monthRange.addEventListener("input", (e) => {
  monthRangeVal.textContent = `${monthRange.value}월`;
});

// 데이터 입력 받기
// 1. 인풋에 들어간 값 받아오기
// 2. 계산하기를 눌렀을 때, 계산하기 입력칸이 사라지고 기념일이 출력되도록 만들기

dateSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  submitCheck = true;

  //기존 양식 사라지게 하고, 계산된 날짜 출력되도록 하기
  dateSubmit.classList.add(HIDDEN_CLASS);
  result.classList.remove(HIDDEN_CLASS);
  againBtn.classList.remove(HIDDEN_CLASS);
});

setInterval(() => {
  if (submitCheck) {
    // 데이터를 지속적으로 잡아먹지 않는 방식? 내가 클릭했을 때만 실행하는 방법은 무엇이있을까?
    const currentDate = new Date();
    const inputData = new Date(`${2022}/${monthRange.value}/${dayValue.value}`);
    let diff = inputData.getTime() - currentDate.getTime();
    let diffDay = Math.trunc(diff / day);
    let diffHour = Math.trunc((diff % day) / hour);
    let diffMinute = Math.trunc((diff % hour) / minute);
    let diffSeconds = Math.trunc((diff % minute) / seconds);
    result.textContent = `${diffDay}일, ${diffHour}시간, ${diffMinute}분, ${diffSeconds}초가 남았네요 🥳`;
  }
}, 1000);

againBtn.addEventListener("click", () => {
  dateSubmit.classList.remove(HIDDEN_CLASS);
  result.classList.add(HIDDEN_CLASS);
  againBtn.classList.add(HIDDEN_CLASS);
  dayValue.value = "";
});
