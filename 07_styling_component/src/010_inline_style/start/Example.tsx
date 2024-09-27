import { useState } from "react";
// inline style
// inline style의 문제점 
// ::before, ::after 등의 기법을 사용하지 못한다.
// @media 등 반응형 기술을 쓰지 못한다.
const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    // 자바스크립트안에서 css를 작성할 경우 
    // 스네이크케이스는 낙타케이스로 바꾼다.
    const style = {
        border: 1,
        width: 120,
        height: 60,
        display: "block",
        fontWeight: "bold",
        cursor: "pointer",
        margin: "auto",
        borderRadius: 9999,
        background: isSelected ? "pink" : ""
    }
    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            <div style={{ textAlign: "center" }}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
