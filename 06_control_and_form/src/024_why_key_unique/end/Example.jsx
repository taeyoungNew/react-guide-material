import "./Example.css";
import { useState } from "react";

const Example = () => {
  const inputFact = () => ({
    key: Math.floor(Math.random() * 1e3),
    value: <input />,
  });

  const [inputs, setInputs] = useState([inputFact(), inputFact(), inputFact()]);

  const unshiftInput = () => {
    setInputs((prev) => [inputFact(), ...prev]);
  };
  return (
    <>
      <button onClick={unshiftInput}>先頭に追加</button>
      <div className="flex">
        <div>
          <strong>{`key={ユニークキー}`}</strong>
          <ul>
            {inputs.map((input) => (
              // 고유의 키와 값이 짝
              <li key={input.key}>
                {input.key}: {input.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <strong>{`key={index}`}</strong>
          <ul>
            {inputs.map((input, index) => (
              // 인덱스순서와 값이 짝
              <li key={index}>
                {input.key}: {input.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Example;
