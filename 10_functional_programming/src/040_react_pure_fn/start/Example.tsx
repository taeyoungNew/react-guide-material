// 純粋関数
let value = 0;

type ChildPurePropsType = {
  value: number
}

const ChildPure = ({ value }: ChildPurePropsType) => {
  return (
    <>
      <div>{value}</div>
    </>
  )
}

const Example = () => {
  let value = 0;
  return (
    <>
      <ChildPure value={value}></ChildPure>
      <ChildPure value={value}></ChildPure>
      <ChildPure value={++value}></ChildPure>
      {/*
         下記のように外部スコープで
        定義した変数をJSX内で使用してはいけない
        なぜなら、他のところで変数のデータを変更する恐れが高い
        <div>{value}</div>
      */}
    </>
  );
};

export default Example;
