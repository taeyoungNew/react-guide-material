import React from "react";

// 컴포넌트도 리액트의 요소로서 취급한다.
const Hello = () => {
  return <h2>Hello!</h2>
}
const Bye = () => {
      return <h2>GoodBye!</h2>;
}

const Example = () => {
  return (
    <div>
      <Hello />
      <Bye/>
    </div>
  );
};

console.log(Example());

export default Example;

