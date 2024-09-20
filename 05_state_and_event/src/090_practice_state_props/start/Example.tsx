
import { useState } from "react";

const Example = () => {
  const [ ctn, setCnt ] =  useState(0);
  return (
    <>
      <h3>練習問題</h3>
      {/* <p>カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。
         Exampleコンポーネント内で現在のカウントの値を管理するstateを
         一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。</p> */}
      {/* このコメントアウトを外して利用！ */}
        <CountResult title="カウント" ctn={ctn} />
        <CountUpdate setCnt={setCnt} /> 
    </>
  );
};

type cntResultType = {
  title: string
  ctn: number
}

type cntUpdateType = {
  setCnt: React.Dispatch<React.SetStateAction<number>>
}
const CountResult = ({title, ctn}: cntResultType) => 
        <h3>{title}: {ctn}</h3>

const CountUpdate = ({ setCnt }: cntUpdateType) => {
  const countUp = () => {
    /* countに1追加 */
    setCnt((prev: number) => prev + 1)
  };
  const countDown = () => {
    /* countから1マイナス */ 
    setCnt((prev: number) => prev - 1)
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
