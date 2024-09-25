import { useState } from "react";

// POINT 複数チェックボックスの実装
const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const newFruits = fruits.map((fruit) => {
      const newFruit = { ...fruit }
      console.log(e.target.value);
      
      if(newFruit.label == e.target.value) {
        console.log(newFruit.checked, fruit.checked);
        
        newFruit.checked = !fruit.checked
      }
      // console.log(newFruit);
      
      return newFruit
    })

    setFruits(newFruits)

    let sumVal = 0
    // newFruits.forEach(fruit => {
    //   if(fruit.checked) {
    //     sumVal = sumVal + fruit.value
    //   }
    // })
    // newFruits
    //   .filter(fruit => fruit.checked)
    //   .forEach(fruit => sumVal = sumVal + fruit.value)
    sumVal = newFruits
      .filter((fruit) => fruit.checked)
      .reduce((sumVal, fruit) => sumVal + fruit.value, 0)
      // setSum(sumVal)

    setSum(sumVal)
  }

  return (
    <div key={fruits[1].label}>
      {fruits.map(fruit => {
        return (
          <>
            <div key={fruit.label}>
              <input 
                type="checkbox" 
                value={fruit.label}
                checked={fruit.checked}
                onChange={handleChange}
              >
              </input>
              <label　htmlFor={fruit.label} >
                {fruit.label}: {fruit.value}
              </label>
            </div>
          </>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
