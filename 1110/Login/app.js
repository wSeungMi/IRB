// 값을 알아야하는 element들에게 접근하기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// hidden 클래스명을 한번에 묶어주기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "useName";

function onLoginSubmit(event) {
    event.preventDefault(); // 어떤 event의 기본 행동이 발생되지 않도록 막아줌(브라우저의 기본 이벤트 동작을 취소)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName); // "userName"은 key값
    // 입력받은 input값을 화면에 뿌려주고 환영 메세지 출력!
    paintGreetings(userName);
}

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}`; // 이때는 입력한 값이 없어서 로컬스토리지에 저장된 값을 가져온다!
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬스토리지 내용에 따라 화면 다르게 출력하기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // subtmit은 엔터를 누르거나 버튼을 클릭할 때 발생함
    // 이때 submit은 서버로 form의 데이터를 전송해주기 때문에 버튼을 누르면 새로고침이 됨
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername); // 화면에 텍스트 출력만 해주는 함수
}
