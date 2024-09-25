import { useState } from "react";

const Example = () => {
  const [ fruit, setFruit ] = useState("Apple")
  const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => setFruit(e.target.value)
  
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"]
  return (
    <>
      {RADIO_COLLECTION.map(val => {
        return (
          <label key={val}>
            <input 
              // key={val}
              type="radio" 
              value={val}
              checked={fruit === val}
              onChange={onChange}
            />
            {val}
          </label>
        )
      })}
      {/* <label >
        <input 
          type="radio" 
          value="Apple"
          checked={fruit === "Apple"}
          onChange={onChange}
        />
        Apple
      </label> */}
      {/* <label >
        <input 
          type="radio" 
          value="Banana"
          checked={fruit === "Banana"}
          onChange={onChange}
        />
        Banana
      </label>
      <label >
        <input 
          type="radio" 
          value="Cherry"
          checked={fruit === "Cherry"}
          onChange={onChange}
        />
        Cherry
      </label> */}
      <h2>{`私は${fruit}食べたい`}</h2>
    </>
  );
};

export default Example;
