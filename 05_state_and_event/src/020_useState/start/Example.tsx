import { useState } from "react";

const Example = () => {
  // 0번째는 값이 저장되는 변수
  // 1번째는 값을 저장하는 함수
  // 제네릭타입으로 number타입과 string타입을 받을 수 있게하자
  let [val, setVal] = useState<number | string>(0);
  
  
  return (
    <>
      <input 
        type="text"
        onChange={(event) => {
          const setFn = setVal
          setFn(event.target.value)
        }} 
      /> = {val}
    </>
  );
};

export default Example;
