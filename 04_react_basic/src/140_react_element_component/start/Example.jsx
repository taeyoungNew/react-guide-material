import React from "react";

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

