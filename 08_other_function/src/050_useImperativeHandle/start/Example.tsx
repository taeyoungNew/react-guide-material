import { useRef, forwardRef, useImperativeHandle, ReactElement } from "react";

/* POINT forwardRef
子コンポーネント内の DOM に直接アクセスしたいときに使います。
refは、親から子コンポーネントへprops形式で渡して参照するということができないため、
参照したい場合は子コンポーネント内でfowardRefを使用する必要があります。
*/

type InputHadle = {
  myFocus: () => void;
  
}

type refType = {
  ref: HTMLInputElement
}

type Props = {}

// Input컴포넌트에서는 InputHadle타입으로 ref를 받고 
// Input컴포넌트안에서 inputRef를 HTMLInputElement로 useRef를 초기화하여 
// myFocus가 실행이 될 때 input element를 focus하게한다.
const Input = forwardRef<InputHadle, Props>((props, ref) => {
  // 얘는 useRef를 새롭게 초기화
  const inputRef = useRef<HTMLInputElement>(null)

  // 부모에서 온 ref를 처번째 인자로 받아서 myFocus메서드를 정의한다.
  useImperativeHandle(ref, () => {
    return {
      myFocus() {
        inputRef.current?.focus()
      }
    }
  })

  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  // 부모에서 InputHadle로 초기화를 시키고 Input컴포넌트에 보낸다.
  const ref = useRef<InputHadle>(null);
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current?.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
