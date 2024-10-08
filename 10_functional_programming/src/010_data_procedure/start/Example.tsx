const Example = () => {
  // 関数型
  // 「値の」状態と処理を分離して管理
  // A（Data）　-> B(data) -> C(data) -> 結果
  // 状態と処理は切り離す
  const nums = [1, 2, 3]
  const sum = (arr: number[]) => {
    const nums = arr;
    let sumVal = 0;
    // for(let idx = 0; idx < nums.length; idx++) {
    //   sumVal += nums[idx]
    // }
    // nums.forEach(num => sumVal += num)
    sumVal = nums.reduce((acc, curr) => acc + curr)
    return sumVal
  } 

  // オブジェクト指向型
  // 状態（データ）と処理しを対で管理
  // obj.method(); -> 結果
  const numObj = {
    nums : [1, 2, 3],
    sum() {
      const nums = this.nums
      let sumVal = 0;
      for(let idx = 0; idx < nums.length; idx++) {
        sumVal += nums[idx]
      }
      return sumVal
    }
  }



  return (
    <>
      <div>オブジェクト指向型：{numObj.sum()}</div>
      <div>関数型：{sum(nums)}</div>
    </>
  );
};

export default Example;
