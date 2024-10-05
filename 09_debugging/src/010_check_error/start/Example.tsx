import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  const countUp = () => {
    setCount((prevstate) => { 
      console.log(prevstate.val);
      // 넘겨받은 객체를 새로운 객체에 복사하여 리턴
      prevstate.val++
      const newState = {...prevstate}
      return newState
    });
  };1

  return (
    <>
      <p>現在のカウント数: {count.val}</p>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;
