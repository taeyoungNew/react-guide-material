import { useState } from "react";

type countPramType = {
  title: string
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const Example = () => {
  const [ toggle, setToggle ] = useState(true);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {/* {toggle ? <Count key="A" title="A" count={count} setCount={setCount} /> 
      : <Count key="B" title="B" count={count} setCount={setCount} />} */}
      <Count key="A" title="A" count={countA} setCount={setCountA} /> 
      <Count key="B" title="B" count={countB} setCount={setCountB} />
    </>
  )
}
const Count = ({ title, count, setCount }: countPramType) => {

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
