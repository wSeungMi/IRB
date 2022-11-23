// state만 이용했을 때

import React, { useState } from "react";

const Counter = () => {
    // 0에서 출발 : useState(0)
    // 1씩 증가하고
    // 1씩 감소하는
    // count 상태

    // 리액트의 메서드 useState
    // 배열을 반환하고 배열의 객체구조할당(비구조화할당)을 통해
    // 0번째 index를 count를 1번째 index를 setCount라는 상수로 받아온 것을 확인할 수 있다
    // 상수이기 때문에 이름이 겹치면 안됨!

    // count: 상태의 값이어서 JSX에서 리턴을해서 화면에 표시할 수 있음
    // setCount: count의 값을 변화시키는 상태변화함수
    // useState(0): count라는 상태를 만들때 주는 초기값

    console.log("counter 호출!");

    const [count, setCount] = useState(0);

    // 1씩 증가시키는 함수
    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    const [count2, setCount2] = useState(0);

    const onIncrease2 = () => {
        setCount2(count2 + 1);
    };

    const onDecrease2 = () => {
        setCount2(count2 - 1);
    };

    return (
        <div>
            {/* 동적으로 변해야하는 것 = 상태 */}
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>

            <h2>{count2}</h2>
            <button onClick={onIncrease2}>+</button>
            <button onClick={onDecrease2}>-</button>
        </div>
    );
};

export default Counter;
