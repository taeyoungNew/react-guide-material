import "./Child.css";
import React from "react"
const Child = () => {
  return (
    // 감싸기위해 필요없는 div를 쓰지 말고 React.Fragment를 쓰자
    // 유일하게 key속성을 쓸수있다.
    <React.Fragment> 
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quasi reprehenderit
        obcaecati beatae exercitationem esse aspernatur!
        Totam praesentium consectetur ipsa consequuntur quo
        facilis in eum! Molestiae earum dolore aperiam illum
        exercitationem.
      </p>

    </React.Fragment>
  );
};

export default Child;
