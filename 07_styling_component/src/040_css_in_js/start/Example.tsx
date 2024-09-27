import { useState } from "react";
import styled from "styled-components";

type isSelectedType = {
  isSelected: boolean
}

// 신기방기ㄷㄷ
// styled-components에 타입을 지정하기
// npm install styled-components @types/styled-components
const StyledButton = styled.button<isSelectedType>`
    // 아래는 문자열
    // JS를 쓰고싶을 경우 템플릿리터럴로 감싸야한다
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${({ isSelected }) => 
      isSelected ? "pink": ""};
`;

// AquaButton에 StyledButton계승하기
const AquaButton = styled(StyledButton)`
  background-color: aqua;
  // hover앞에 &를 붙여줘야한다.
  &:hover, :active {
    color: red;
    opacity: 0.7;
  };

  @media (max-width: 600px) {
    border-radius: 0;
  }

  span {
    font-size: 2em;
  }
`


const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton 
        isSelected={isSelected}
        onClick={clickHandler}
      >
        StyledButton
      </StyledButton>

      <AquaButton
        isSelected={isSelected}
        onClick={clickHandler}
      >
        <span>ボタン</span>
      </AquaButton>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
