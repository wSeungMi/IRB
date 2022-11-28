import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState, useRef } from "react";

// const dummyList = [
//     {
//         id: 1,
//         author: "우승미",
//         content: "졸려 1",
//         emotion: 3,
//         created_date: new Date().getTime(),
//     },
//     {
//         id: 2,
//         author: "하이",
//         content: "졸려 2",
//         emotion: 4,
//         created_date: new Date().getTime(),
//     },
//     {
//         id: 3,
//         author: "바이",
//         content: "졸려 3",
//         emotion: 2,
//         created_date: new Date().getTime(),
//     },
// ];

function App() {
    const [data, setData] = useState([]);

    const dataId = useRef(0);

    const onCreate = (author, content, emotion) => {
        const created_date = new Date().getTime();
        const newItem = {
            author,
            content,
            emotion,
            created_date,
            id: dataId.current,
        };
        dataId.current += 1;
        setData([newItem, ...data]);
    };

    return (
        <div className="App">
            <DiaryEditor onCreate={onCreate} />
            <DiaryList dairyList={data} />
        </div>
    );
}

export default App;
