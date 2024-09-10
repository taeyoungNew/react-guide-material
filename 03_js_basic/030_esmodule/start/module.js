export const hello = () => {
  console.log("hello!");
};

const funcB = () => {
  console.log("funcB output");
};

// export defaultは一つのファイルに一つだけexport defaultを定義することができる
export default funcB;

class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name)
  }
}

export { User }
