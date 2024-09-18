const Hello = (props) => {
  // propsの属性の値は変えることはできない
  // props.name = "awdsadasdsw"

  //  
  console.log(Reflect.getOwnPropertyDescriptor(props, "name"));
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;