import { useState, useRef, forwardRef, useImperativeHandle } from "react";

// useImplerationHandle: 
// 부모가 정의한 ref를 자식에게 보내서 
// 부모에서 자식컴포넌트를 원격으로 조작한다.

type videHandler = {
  playVideo: () => void
}

type Props = {
  path: string
  playing: boolean
}

// 자식컴포넌트는 부모에게 받는 ref의 타입을 아래와 같이 지정하고
const Video = forwardRef<videHandler, Props>(({ path, playing }, ref) => {
  // 여기서 쓸 ref를 또 따로 정의한다. 
  // 이유는 forwardRef로 ref를 받았기 때문에 ref라는 이름이 겹치기 때문
  const videRef = useRef<HTMLVideoElement>(null)
  useImperativeHandle(ref, () => {
    // 부모에게서 받은 ref의 속성인 함수를 useImperativeHandle로 정의한다. 
    return {
      playVideo() {
        if(playing) {
          videRef.current?.pause()
        } else {
          
          videRef.current?.play()
        }
        
      }
    }
  });

  return (
    <video style={{ maxWidth: "100%" }} ref={videRef} >
      <source src={path}></source>
    </video>
  );
});



const Example = () => {
  const [playing, setPlaying] = useState(false);
  // 부모에서 자식에게 보낼 useRef를 정의하는데 여기서 
  // 자식에서 조작할 함수를 타입이나 인터페이스로 타입선언을 하고 보낸다. 
  const ref = useRef<videHandler>(null);

  return (
    <div>
      <h3>練習問題</h3>
      <p>
        useRef、useImperativeHandle、forwardRefを使って完成系の動画再生機能を作成してください。※useImperativeHandleでplay(再生)、stop(停止)メソッドを定義すること。
      </p>
      {/* 자식컴포넌트로 위에서 정의한 ref를 보냄 */}
      <Video ref={ref} path="./sample.mp4" playing={playing} />
      <button
        onClick={() => {
          setPlaying((prev) => !prev);
          ref.current?.playVideo()
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
