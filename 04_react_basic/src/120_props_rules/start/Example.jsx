// POINT propsの流れは一方通行
// 親から子の方向で流れていく
// POINT propsは読み取り専用 readonly
// props는 자식컴포넌트에서 받으면 값을 변경할 수 없다.


import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  const name = "Tom"
  return (
    <>
      <Hello name={name}/>
      <Bye name={name}/>
    </>
  );
};

export default Example;
