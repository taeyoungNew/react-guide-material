import { useState } from "react";

const Example = () => {
  const [ val, setVal ] = useState("")
  const clearFun = () => setVal("")

  return (
    <div>
      <label htmlFor="123">ラベル</label>
      <div>
        <input 
          id="123" 
          // value={val} 
          type="text" 
          placeholder="こんにちは" 
          onChange={(e) => setVal(e.target.value)}
        />

        <textarea 
          id="456" 
          // value={val} 
          onChange={(e) => setVal(e.target.value)} 
          placeholder="하이">
        </textarea>      
      
      </div>
      <h3>{val}</h3>
      <button onClick={clearFun}>clear</button>
    </div>
  );
};

export default Example;
