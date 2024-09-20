import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [ array, shuffleArr ] = useState(numArray)
  const letShuffle = () => {
    const result = array.map((el) => ({ sort: Math.random(), value: el}))
        .sort((a, b) => a.sort - b.sort)
        .map((el) => el.value)
    shuffleArr(result)
  }
  
  return (
    <>
      <h1>{array}</h1>
      <button onClick={letShuffle}>shuffle</button>
    </>
  );
};

export default Example;
