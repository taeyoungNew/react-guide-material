import { useState, useRef, ElementRef } from "react";
// useRef：再レンダリングを発生させず値を保持する方法
// ref의 특징
// 1。useRef는 DOM이외의 Element도 보유할 수 있다.
// 2。再レンダリングされても情報が保存される
// ！ 通常の変数はレンダリングの度初期化される
// 3。refの値を変更しても再レンダリングがトリガーされない
// ！同じく値を保持歴るstateは変更されると再レンダリングされる
// 4。refオブジェクトをJSXのref属性に渡すとそのDOMにアクセスできるようになる

const Case1 = () => {
  const [value, setValue] = useState("");
  // input의 DOM요소에 접근할 때는 아래와 같이 타입을 지정해야한다.
  const inputRef = useRef<HTMLInputElement>(null)



  return (
    <div>
      <h3>ユースケース1</h3>
      <input 
        type="text" 
        // input에서 작성되는 DOM요소의 참조를 inputRef가 보유하게 된다.
        ref={inputRef}
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      {/* 버튼을 누르면 inputRef가 있는 ipnut태그에 포커스를 맞추게된다. */}
      <button onClick={() => inputRef.current?.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const [ playing, setPlaying ] = useState(false)
  // 
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div>
      <video style={{ maxWidth: "100%"}} ref={videoRef}>
        <source src="./sample.mp4" type="" />
      </video>
      <button onClick={() => {
          if(playing) {
            // null, undefinedセーフな呼び出しを可能にする構文。便利。
            // currentがnull, undefの時はundef, それ以外の時はbaz()の戻り値
            videoRef.current?.pause()
          } else {
            videoRef.current?.play()
          }
          setPlaying((prev) => !prev)
        }}
      >
        { playing ? "Stop" : "play"}
      </button>
    </div>
  )
}

const Case3 = () => {
  // 현재의 
  const createTimeStamp = () => new Date().getTime()
  const [ timeStamp, setValue ] = useState(createTimeStamp())
  const ref = useRef(createTimeStamp())
  
  const updateState = () => {
    // stateの場合は値を更新した場合
    // 再レンダリングされる
    setValue(createTimeStamp())
  }

  const updateRef = () => {
    // POINT コンソールを見るとブラウザの表示と
    // ref.currentの中身が異なることを確認できる。
    // 
    ref.current = createTimeStamp()
    console.log("ref.current = ", ref.current);
    
  }

  return(
    <div>
      <h3>ユースケース３</h3>
      <p>
        state: {timeStamp}
        <button onClick={updateState}>更新</button>
      </p>
      <p>
        ref: {ref.current}
        <button onClick={updateRef}>更新</button>
      </p>
    </div>
  )

}


const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
      <Case3 />
    </>
  );
};

export default Example;
