//イベントリスナーとは：画面上でぢベントが発生した際に実行したい関数を
// 定義する場所
const Example = (): JSX.Element => {
  // 클립이벤트가 발생했을 때 정적타입 적용하기 
  // 뭐이리 길어ㅡㅡ
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    alert(event.bubbles + "버튼이 클릭되었습니다.")
  }

  const clickHandler2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("버튼2이 클릭되었습니다.")
  }
  
  const hello = (): string => "hello"
  
  return (
    <>
      {/* 
        함수()로 작성을 해버리면 react가 실행이 되었을 떄 함수도 실행 
      ' 되므로 ()는 붙이지 말자
       */}
      <button onClick={(event) => clickHandler(event)}>クリックして</button>
      <button onClick={clickHandler2}>クリックして</button>
      {hello}
    </>
  );
};

export default Example;
