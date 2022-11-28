import DiaryItem from "./DiaryItem";

const DiaryList = ({ dairyList }) => {
    console.log(dairyList);
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{dairyList.length}개의 일기가 있습니다.</h4>
            <div>
                {/* 고유 키가 없으면 mpa(it, idx) 배열의 인덱스로 사용하는 방법도 있기는한데, 대신 RUD를 하면서 인덱스 순서가 변경되면 문제가 발생할 수 있음 -> 그래서 고유키 설정을 추천! */}
                {dairyList.map((it) => (
                    <DiaryItem key={it.id} {...it} />
                    // <div key={it.id}>
                    //     <div>작성자: {it.author}</div>
                    //     <div>일기: {it.content}</div>
                    //     <div>작성시간(ms) : {it.created_date}</div>
                    // </div>
                ))}
            </div>
        </div>
    );
};

// undefined 값으로 에러가 나지 않도록 props의 초기값을 지정해줌
DiaryList.defaultProps = {
    dairyList: [],
};

export default DiaryList;
