import { useState } from "react";
import AnimalList from "./components/AnimalList";
import AnimalFilter from "./components/AnimalFilter";
const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  
  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  })
  return (
    <>
      {/* props를 다수보낼 떄는 배열형식으로 보낸다. */}
      <AnimalFilter filterState = {[filterVal, setFilterVal]}/>
      <AnimalList animals={filterdAnimals} ></AnimalList>
    
    </>
  );
};

export default Example;
