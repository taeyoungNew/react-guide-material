import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  // input의 DOM요소에 접근할 때는 아래와 같이 타입을 지정해야한다.
  const inputRef = useRef<HTMLInputElement>(null)



  return (
    <div>
      <h3>ユースケース1</h3>
      <input 
        type="text" 
        // input에서 작성되는 DOM요소의 참조를 inputRef가 보유하게 된다.
        ref={inputRef}
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      {/* 버튼을 누르면 inputRef가 있는 ipnut태그에 포커스를 맞추게된다. */}
      <button onClick={() => inputRef.current?.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
