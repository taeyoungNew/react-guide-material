import { useState } from "react";
// 関数型プログラミングにおけるstateの役割

/*
  関数型プログラミングの観点では状態管理と処理を分離
*/
const Example = () => {
  // JSXを作成する場所
  // 状態を保持する場合はstateに保持して
  // 処理と状態を必ず分離すること
  const [ state, setState ] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;
