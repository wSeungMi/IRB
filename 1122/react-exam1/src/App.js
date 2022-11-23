import React from "react";
// import "./App.css";
import MyHeader from "./MyHeader";
// import CounterState from "./CounterState";
import Counter from "./Counter";
import Container from "./Container";

function App() {
    const counterProps = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        // initialValue: 5,
    };

    return (
        <Container>
            <div>
                <MyHeader />
                {/* <CounterState /> */}
                {/* 아래처럼 컴포넌트에 인라인으로 props 값을 많이 넣어주면 너무 길어져서 이때는 객체로 만들어서 ...연산자를 사용하여 전달할 수 있다 */}
                {/* <Counter a={1} b={2} c={3} d={4} e={5} initialValue={5} /> */}
                <Counter {...counterProps} />
            </div>
        </Container>
    );
}
export default App;
