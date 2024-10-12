const Example = () => {
  // immutabilliyの保持
  // 引数で渡された値を変更しない
  const num = { val: 2 }
  const double = (num: { val: number }) => {
    // 関数外にある値を関数内で変更している
    // num.val = num.val * 2;
    const newNum = { val: num.val * 2 }
    return newNum;
  }

  const newNum = double(num);
  
  console.log('newNum', newNum, 'num', num)
  console.log(newNum === num);

  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
