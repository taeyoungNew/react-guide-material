const Example = () => {
  // 関数型（純粋関数）
  // => 数式である
  // ・fn(決まった引数) ->　決まった戻り値
  // ・関数外の状態（データ）は参照・変更しない
  // ・関数外に影響を及ぼさない
  // ・引数で渡された値を変更しない
  // 上記の要件を満たさない操作は[副作用]と呼ぶ

  const val1 = 2, val2 = 3
  // 純粋関数
  const add1 = (val1: number, val2: number) => {
    return val1 + val2
  }

  // 副作用
  let result;
  const add2 = (val1: number) => {
    // 関数外に影響を及ぼしている
    // val2は引数として渡されてない
    result = val1 + val2
    return val1 + val2
  }


  return (
    <>
      <h3>純粋関数:{add1(val1, val2)}
      </h3>
      <p>fn(決まった引数) には 決まった戻り値 を返す</p>
    </>
  );
};

export default Example;
