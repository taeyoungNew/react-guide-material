import { useState } from 'react';

const Example = () => {
  const orderObj = { item: 'apple', count: 10 };
  const [order, setOrder] = useState(orderObj);
  const changeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setOrder({ ...order, item: e.target.value })
    // 元の値を使う場合
    // ()로 감싸는 이유는 자바스크립트엔진이 
    // 자바스크립트를 실행할 때 {}가 object리터럴의 {}인지
    // 화살표함수의 {}인지 구별을 못하기 때문이다
    setOrder(order => ({ ...order, item: e.target.value}))
  };
  const countUp = () => {
    setOrder(order => ({...order, count: order.count + 1}))
  };
  const countDown = () => {
    setOrder(order => ({...order, count: order.count - 1}))
  };
  return (
    <div>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように「+と-ボタンをクリックするとCountの表示が1ずつ増減する機能」と「input要素に連動してItemの表示が変更される機能」を実装してください。コンポーネントの外側（上部）に変数や関数を準備しているためうまく使ってください。
      </p>
      <h3>Item:{order.item}</h3>
      <h3>Count:{order.count}</h3>
      <input type="text" value={order.item} onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Example;
