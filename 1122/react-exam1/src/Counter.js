// Props를 이용했을 때

import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

// const Counter = (props) => {
const Counter = ({ initialValue }) => {
    // console.log(initialValue);
    const [count, setCount] = useState(initialValue);

    // 1씩 증가시키는 함수
    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            {/* 동적으로 변해야하는 것 = 상태 */}
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            {/* Counter의 자식요소로 OddEvenResult를 배치 */}
            <OddEvenResult count={count} />
        </div>
    );
};

Counter.defaultProps = {
    initialValue: 0,
};

export default Counter;
