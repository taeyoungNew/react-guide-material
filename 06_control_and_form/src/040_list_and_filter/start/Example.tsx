import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFilterVal] = useState("")

  console.log("filterVal = ",  filterVal);
  
  console.log(animals.filter(animal => animal.indexOf(filterVal) !== -1).map((animal => animal)));
  
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterVal(e.target.value)} />
      <ul>
        {animals
          .filter(animal => animal.indexOf(filterVal) !== -1)
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
