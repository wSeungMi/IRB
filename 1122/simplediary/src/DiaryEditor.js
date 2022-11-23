import { useState } from "react";

const DiaryEditor = () => {
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("");

    // 핸들러 합치기
    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(state);
        alert("저장 성공!");
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                {/* onChange는 값이 바뀌었을 때 수행하는 이벤트 */}
                <input
                    name="author"
                    value={state.author}
                    onChange={handleChangeState}
                    // onChange={(e) => {
                    //     // console.log(e.target.value);
                    //     // console.log(e.target.name);
                    //     // setAuthor(e.target.vaule);
                    //     setState({
                    //         ...state,
                    //         author: e.target.value,
                    //         // content: state.content,
                    //     });
                    // }}
                />
            </div>
            <div>
                <textarea
                    name="content"
                    value={state.content}
                    onChange={handleChangeState}
                    // onChange={(e) => {
                    //     // console.log(e.target.value);
                    //     // setContent(e.target.value);
                    //     setState({
                    //         ...state,
                    //         // author: state.value,
                    //         content: e.target.value,
                    //     });
                    // }}
                />
            </div>
            <div>
                <span>오늘의 감정점수 : </span>
                <select
                    name="emotion"
                    value={state.emotion}
                    onChange={handleChangeState}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
};

export default DiaryEditor;
