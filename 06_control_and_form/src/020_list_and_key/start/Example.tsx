
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {/* {animalList} */}
        {/* 
          map을 jsx안에서 사용할 경우 key값을 주도록하자
          리액트가 기존의 요소트리와 비교하여 바뀌거나 추가된 부분만 
          비교할 수 있으므로 훨씬 작업이 짧아진다.
        */}
        {animals.map((animal) => <li key={animal}>Hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
