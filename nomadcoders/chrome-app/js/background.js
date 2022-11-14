// 이미지를 배열로 묶어줌
const images = ["1.jpg", "2.jpg", "3.jpg"];

// Math.random을 사용하여 나오는 이미지를 랜덤으로 출력
const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement : 지정한 tagName의 HTML 요소를 만들어 반환함
const bgImage = document.createElement("img");

// img src의 주소값에서 랜덤 이미지명을 받아와 넣어줌
bgImage.src = `./img/${chosenImage}`;

// body 요소의 마지막 자식으로 이미지를 붙임
document.body.appendChild(bgImage);
