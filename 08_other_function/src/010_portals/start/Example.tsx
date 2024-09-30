import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

/* POINT createPortalの使い方
第一引数: React の子要素としてレンダー可能なもの （要素、文字列、フラグメント、コンポーネントなど）
第二引数: レンダー先のDOM要素
*/

/* POINT createPortalはどんなときに使うか？
子要素は親要素のスタイルによって表示に制限を受ける場合があります。
（overflow: hidden 、 z-index 、 width　など・・・ ）
それらの制限なく、子要素が親要素を「飛び出して」表示する必要があるときにcreatePortalを使うのが有効です。
モーダル、ポップアップ、トーストは使用の代表例です。
*/
type ModalPortalType = {
  children: React.ReactNode
}

const ModalPortal = ({ children }: ModalPortalType) => {
  // as Element를 안붙이면  유니온타입이 되버림
  const target = document.querySelector(".container.start") as Element
  return createPortal(children, target)
}

const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    // 버블링으로 인해 부모의 div태그에서 반응
    // Modal로 인해 DOM트리상으로는 container밑에 모달이 생기지만 
    // react요소트리상으로는 ModalPortal이 밑에있는 div의 자식으로 들어가기때문에 
    // constainer라는 클래스이름을 가진 div가 버블링에 반응하지 않는다.
    <div onClick={() => console.log("空のdiv")}>
      <div className="container start"  onClick={() => console.log("container")}>

      </div>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        disabled={modalOpen}
      >
        モーダルを表示する
      </button>
      {modalOpen && 
      (
        <ModalPortal>
          <Modal handleCloseClick={() => setModalOpen(false)} />
        </ModalPortal>
      )}
    </div>
  );
};

export default Example;
