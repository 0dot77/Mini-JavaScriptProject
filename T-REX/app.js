'use strict';

//-------------- TASK --------------//
// 1. 각 오브젝트에 이미지 입히기 (장애물과 티렉스)
// 2. 배경 입히기 (ok, 선인장이 뒤로 밀리는 gif 만들기)
// 3. 점수 판 구현하기
// 4. Game-over 발생하면,
// - 1. 내 점수 보여주기
// - 2. RESTART 버튼으로 다시 시작하도록 해보기
//-------------- TASK --------------//

const dino = document.querySelector('.dino');
const grid = document.querySelector('.grid');
const alert = document.getElementById('alert');

let isJumping = false;

// 점프해서 내려가는 것을 조금 더 자연스럽게 연출하기 위한 약간의 중력 적용
let gravity = 0.9;
let isGameOver = false;

function control(e) {
    //keyCode 를 32로 설정해서, space가 눌리면 점프 하도록 함
    if(e.keyCode === 32) {
        if(!isJumping) {
            isJumping = true;
            jump();
        }
    }
}

// key가 눌리면 반응하는 이벤트를 만들기
document.addEventListener('keyup', control);

let position = 0;

function jump() {
    let count = 0;
    let timerId = setInterval(function () {

        //move down
        if (count  === 15) {
            clearInterval(timerId);
            let downTimerId = setInterval(function () {
                if(count === 0) {
                    clearInterval(downTimerId);
                    isJumping = false;
                }
                position -= 5;
                count --;
                position = position * gravity;
                dino.style.bottom = position + 'px';
            },20);
        }

        //move up
        position += 30;
        count++;
        position *= gravity;
        dino.style.bottom = position + 'px';
    },20);
}

function generateObstacle() {
    // 4초에 한 번씩 랜덤한 장애물이 튀어나올 수 있도록 함
    let randomTime = Math.random() * 4000;
    let obstaclePosition = 1000;
    const obstacle = document.createElement('div');
    if(!isGameOver) obstacle.classList.add('obstacle');
    grid.appendChild(obstacle);

    //HTML, CSS로 자바스크립트에서 가져온 요소를 보여주려면 stlye의 속성을 활용해야한다.
    obstacle.style.left = obstaclePosition + 'px';

    let timerId = setInterval(function() {
        if(obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {
            // alert가 울리는 포지션을, 장애물과 부딪혔을 때의 위치로 두고 싶다.
            // 문제 - 일정 시간이 지나면 포지션 위치가 초기화 된다.
            let alertPosition = position;
            clearInterval(timerId);
            alert.innerText = 'GAME OVER';
            alert.style.bottom = alertPosition + 'px';
            isGameOver = true;
            console.log(alertPosition);

            //오브젝트가 장애물에 부딪히면 모든 div를 없애준다.
            while(grid.firstChild) {
                grid.removeChild(grid.lastChild);
            }
        }


        obstaclePosition -= 10;
        obstacle.style.left = obstaclePosition + 'px';
    },20);
    if(!isGameOver) setTimeout(generateObstacle, randomTime);
}

generateObstacle();