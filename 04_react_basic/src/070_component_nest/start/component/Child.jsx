import { List } from "./List.jsx";
import "./Child.css"

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};
// 하나의 파일에서 하나의 컴포넌트
export default Child;
