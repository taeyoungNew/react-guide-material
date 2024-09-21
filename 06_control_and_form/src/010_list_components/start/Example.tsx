
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  const animalList = []
  // for문 = 문장이르모 jsx안에서는 사용 못 한다.
  for(const animal of animals) {
    // react에서는 HTML태그를 배열에도 담을 수 있다.
    animalList.push(<li>{animal}</li>)
  }

  // map = 식이므로 jsx아에서 사용이 가능하다.
  const helloAnimals = animals.map((el) => <li>hello, {el}</li>)
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {animalList}
        {helloAnimals}
      </ul>
    </>
  );
};

export default Example;
