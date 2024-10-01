import { useRef, forwardRef } from "react";
// forwardRef 쓰는 이유:
// 外部に公開する用のライブラリを作成する場合や
// 他の開発者が使う用のコンポーネントを作成する際は
// apiの名前は統一したほうが良い

// refを他のコンポーネントに渡す方法

// type InputComProps = {
//   ref: React.RefObject<HTMLInputElement>
// }

type Ref = HTMLInputElement
// 첫번째인자는 반드시 props이기때문에 props를 받아야하고 ref는 그 다음에 받아야한다.
const InputCom = forwardRef<HTMLInputElement>((props, ref) => {
  return (<input type="text" ref={ref} />)
})

const Example = () => {
  const inpuRef = useRef<HTMLInputElement>(null);
  return (
    <>
      {/* 
        `ref` is not a prop. refの名前のままで propsとして渡せない 
        理由はref自体は特別な属性となるため
      */}
      {/* <InputCom ref={ref} /> */}
      {/* 解決方法第1 違う名前で渡す*/}
      {/* <InputCom customRef={ref} /> */}
      {/* 解決方法第2 forwardRefを使った渡し方*/}
      <InputCom ref={inpuRef} />
      <button onClick={() => inpuRef.current?.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
