import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [ array, setArray ] = useState(numArray)
  let newNumArr = [...array] // 배열을 완전 복사

  const letShuffle = () => {
    console.log("믹");
    
    let lastNum = newNumArr.pop()
    if(typeof lastNum === "number") {
      console.log("if문", lastNum);
      console.log("newNumArr = ", newNumArr);
      
      newNumArr.unshift(lastNum)
    }
    // newNumArr.shift(lastNum)
    // const result = array.map((el) => ({ sort: Math.random(), value: el}))
    //     .sort((a, b) => a.sort - b.sort)
    //     .map((el) => el.value)
    setArray(newNumArr)
  }
  
  return (
    <>
      <h1>{array}</h1>
      <button onClick={letShuffle}>shuffle</button>
    </>
  );
};

export default Example;
