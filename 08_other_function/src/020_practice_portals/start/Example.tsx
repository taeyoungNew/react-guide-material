// 기본적으로 라이브러리는 맨 위에
import { useState } from "react";
import { createPortal } from "react-dom";
// 그 다음에 자신이 만든 컴포넌트를 import한 코드를 작성한다.
import Toast from "./components/Toast";

type ModalPortalType = {
  children: React.ReactNode
}

const ModalPotal = ({ children }: ModalPortalType) => {
  const target = document.querySelector(".container.start") as Element
  return createPortal(children, target)
}


const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <h3>
        トーストの作成（createPortal）
      </h3>
      <p>
        ボタンを押すと.container.start要素にマウントされて、
        表示されるトーストを作成してください。
        トーストにはToastコンポーネントを使用してください。
      </p>

      <div className="container start"></div>
      
      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && 
      (
        // createPorta할 컴포넌트를 감싼다.
        <ModalPotal>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
        </ModalPotal>
      )}
    </div>
  );
};

export default Example;
