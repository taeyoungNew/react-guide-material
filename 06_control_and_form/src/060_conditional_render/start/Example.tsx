import { useState } from "react";

// if文、&&, ??`(Null合体演算子)、３項目演算子
// A ?? B => A가 null이나 undefined이면 B를 선택한다.
const Example = () => {
  const animals = ["Dog", "Cat", "Rat", null, undefined];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            // indexOf은 null이나 undefined는 에러를 일으킴
            const animalStr = animal ?? ""
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            console.log(animalStr.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            // return <li key={animal}>{
            //   animal === "Dog" 
            //   ? animal + "★" 
            //   : animal
            return <li key={animal}>{
              animal ?? "null, undefined입니다."
            }
            {
              animal === "Dog" && "★"
            }</li> 

            // if(animal === "Dog") {
            //   return <li key={animal}>{animal}★</li>
            // } else {
            //   return <li key={animal}>{animal}</li>
            // }

          })}
      </ul>
    </>
  );
};

export default Example;
