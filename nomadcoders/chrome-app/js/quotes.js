// 명언 객체를 배열로 묶어줌
const quotes = [
    {
        quote: "성공만큼 큰 실패는 없다.",
        author: "네이버",
    },
    {
        quote: "과거에서 교훈을 얻을 수는 있어도 과거 속에 살 수는 없다.",
        author: "네이버",
    },
    {
        quote: "당신은 지체할 수도 있지만 시간은 그러하지 않을 것이다.",
        author: "네이버",
    },
    {
        quote: "인간의 삶 전체는 단지 한 순간에 불과하다. 인생을 즐기자.",
        author: "네이버",
    },
    {
        quote: "누구에게나 친구는 어느 누구에게도 친구가 아니다.",
        author: "네이버",
    },
    {
        quote: "설명하지마라--친구라면 설명할 필요가 없고, 적이라면 어차피 당신을 믿으려 하지 않을테니까.",
        author: "네이버",
    },
    {
        quote: "교육은 암기를 얼마나 열심히 했는지, 혹은 얼마나 많이 아는지가 아니다. 교육은 아는 것과 모르는 것을 구분할 줄 아는 능력이다.",
        author: "네이버",
    },
    {
        quote: "배우나 생각하지 않으면 공허하고, 생각하나 배우지 않으면 위험하다.",
        author: "네이버",
    },
    {
        quote: "한 사람에게서 모든 덕을 구하지 말라.",
        author: "네이버",
    },
    {
        quote: "작별 인사에 낙담하지 말라. 재회에 앞서 작별은 필요하다. 그리고 친구라면 잠시 혹은 오랜 뒤라도 꼭 재회하게 될 터이니.",
        author: "네이버",
    },
];

// 앞에 있는 span에 접근
const quote = document.querySelector("#quote span:first-child");
// 마지막에 있는 span에 접근
const author = document.querySelector("#quote span:last-child");

// Math.random() : 0 이상 1 미만의 구간에서 랜덤 숫자를 반환함
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
