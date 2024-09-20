import { useState } from "react";

type propsType = {
  title: string
}

const Example = () => {
  const [ toggle, setToggle ] = useState(true)
  const toggleCom = () => {
    setToggle(prev => !prev)
  }
  return (
    <>
      <button onClick={toggleCom}>toggle</button>
      {/* 
        state는 컴포넌트의 위치가 관건이다
        컴포넌트가 그 자리(리액트 트리)에서 바뀌면 state를 계승하게 된다.
      */}
      
      {toggle ? <Count title="A"/> : <Count title="B"/>}
      {/* 같은 위치에 있는 같은 컴포넌트를 구별해서 취급하고 싶을 때 key속성을 활용한다. */}
      {toggle ? <Count key="A" title="A"/> : <Count key="B" title="B"/>}

    </>
  )
}


const Count = ({ title }: propsType) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
