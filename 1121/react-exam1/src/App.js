import React from "react";
// import "./App.css";
import MyHeader from "./MyHeader";

function App() {
    // let name = "우승미";

    // 인라인 스타일링 방법
    // 객체를 하나 만든다
    const style = {
        App: {
            backgroundColor: "black",
        },
        h2: {
            color: "red",
        },
        bold_text: {
            color: "green",
        },
    };

    // const func = () => {
    //     return "func";
    // };

    const number = 5;

    return (
        // <div className="App">
        <div style={style.App}>
            <MyHeader />
            <h2 style={style.h2}>안녕리액트</h2>
            {/* <h2 style={style.h2}>안녕리액트 {name}</h2> */}
            {/* <h2 style={style.h2}>안녕리액트 {func()}</h2> */}
            <b style={style.bold_text} id="bold_text">
                {/* React.js */}
                {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
            </b>
        </div>
    );
}
export default App;
