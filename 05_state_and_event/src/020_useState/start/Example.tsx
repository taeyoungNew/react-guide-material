import { useState } from "react";

// 각 컴포넌트마다 개별의 state를 보유하고 있음 
// HTML태그에서는 state를 보유하지 않음
// 보통 변수와는 달리 몇번을 렌더링하여도 초기화되지 않는다.
const Example = () => {
  // 0번째는 값이 저장되는 변수
  // 1번째는 값을 저장하는 함수
  // 제네릭타입으로 number타입과 string타입을 받을 수 있게하자
  let [val, setValue] = useState<number | string>(0);
  
  
  return (
    <>
      <input 
        type="text"
        onChange={(event) => {
          const setFn = setValue
          setFn(event.target.value)
        }} 
      /> = {val}
    </>
  );
};

export default Example;
