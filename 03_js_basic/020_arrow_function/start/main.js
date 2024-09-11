// 関数宣言
function fn(number) {
  return number * 2;
}

// 無名関数
const fnNoName = function() {
  return "無名関数だよ"
}

console.log(fnNoName())

// arrow関数
// 記述量が少ないという長所がある
const fnArrow = (number) => {
  return number * 2;
}
console.log(fnArrow(12))

//　本文が一行の場合はもっと省略できる
const fnShortArr = () => "もっと短くできるよ";

//　Obejctをそのまま返したい場合
const fnArrObj = number => ({ result: number })
console.log(fnArrObj(2))