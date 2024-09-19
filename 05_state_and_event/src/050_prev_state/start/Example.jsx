import { useState } from "react";


const Example = () => {
    const [ clickCount, setCount ] = useState(0);
    
    const cntUp = () => {
        setCount(clickCount + 1)
        setCount(clickCount => clickCount + 1)
    }

    return (
        <>
            <p>現在のカウント数：　{clickCount}</p>
            {/* <button onClick={() => {setCount(clickCount + 1)}}>+</button>
            <button onClick={() => setCount(clickCount - 1)}>-</button> */}
            <button onClick={cntUp}>+</button>
        </>
    )
};

export default Example;
