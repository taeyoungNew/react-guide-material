/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
jsx内では式は使用可能しかし文は使用部可能となる
*/

import "./Child.css";

const Child = () => {
  const hello = () => "hello"
  const fn = () => "hello"
  const a = hello();
  return (
    <div className="component">
      <h3>式と文</h3>
      {fn()}
      {a}
    </div>
  );
};

export default Child;
