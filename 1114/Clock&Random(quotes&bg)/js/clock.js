// h2안에 있는 #clock에 접근
const clock = document.querySelector("h2#clock");

// Date() 객체 사용하여 시:분:초의 값을 가져옴
// padStart는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환함
// 길이가 1인 문자가 있을 때 padStart() 메소드를 이용하여, 원하는 길이만큼 늘려줄 수 있음 (늘리고자하는 길이, 빈값을 앞에 채울 문자)
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

// setInterval(호출하려는 함수의 이름, 호출 시간 간격)
// setInterval(sayHello, 5000);

// setTimeout(sayHello, 5000);

// setInterval이랑 setTimeout 차이?
// 무언가를 일정 간격을 두고 실행하도록 만들어주는 스케줄링 메서드
// setInterval 함수는 두번째 인자로 전달받은 시간 간격으로 동작하는 타이머를 생성. 첫번째로 전달받는 콜백함수가 시간 간격을 두고 반복적으로 호출
// setTimeout 함수는 두번째 인자로 전달받은 시간 변수(ms 단위, 1000이면 1초) 후 단 한번만 동작하는 타이머를 생성

// 시간 출력하기 Date()
getClock(); // getClock를 즉시 실행(1초의 갭을 없애기 위해)
setInterval(getClock, 1000);
