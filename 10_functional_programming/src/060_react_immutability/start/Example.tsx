import { useState } from "react";
  // 関数型（純粋関数）
  // => 数式である
  // ・fn(決まった引数) ->　決まった戻り値
  // ・関数外の状態（データ）は参照・変更しない
  // ・関数外に影響を及ぼさない
  // ・引数で渡された値を変更しない
  // 上記の要件を満たさない操作は[副作用]と呼ぶ

type ChildProps = {
  state: {
    value: number
  },
  setState: React.Dispatch<React.SetStateAction<{ value: number; }>>
}


const Child = ({ state, setState }: ChildProps) => {
  // props는 변경불가 
  // state = { value: 1 }
  // setState({ value: 2 })
  const increament = () => {
    // 받은 prev가 아닌 별개의 객체를 리턴할 필요가 있다. 
    setState(prev => ({ value: prev.value + 1 }))
  }
  return (
    <>
      <span>{state.value}</span>
      <button onClick={increament}>증가</button>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={setState} />
      </div>
    </>
  );
};

export default Example;
