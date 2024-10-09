const Example = () => {
  // 渡された値を変更しない
  const num = { val : 2 }
  //　副作用
  // const double = () => {
  //   num.val = num.val * 2
  //   return num;
  // }

  // 
  const double2 = (num: { val : number}) => {
    const newNum = { val : 0 }
    newNum.val = num.val * 2
    return newNum
  }

  
  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
