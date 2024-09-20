// プリミティブ型：1, "str", bool, 10n, Symbol(), null, undefined
// オブジェクト型：{}, []等のプリミティブ型以外

import { useState } from "react";

const Example = () => {
  const personObj: {name: string, age: string | number} = { name: "Tom", age: 18 };
  const [person, setPerson ] = useState(personObj)

  // パラメータのeがanyにはならないように
  // 型をReact.ChangeEvent<HTMLInputElement>に設定しよう
  // useState의 1번째 함수는 0번째 변수와 다른 파라미터를 받아야한다.
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({...person});
    console.log(person);
    
    
    
    setPerson({ name: e.target.value, age: person.age})
  }

  const changeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ name: person.name, age: Number(e.target.value)})
  }

  const resetBtn = () => {
    setPerson({ name: "", age: "" });
  }

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="text" value={person.age} onChange={changeAge} />
      <div>
        <button　onClick={resetBtn}>リセット</button>
      </div>
    </>
  )
};

export default Example;
