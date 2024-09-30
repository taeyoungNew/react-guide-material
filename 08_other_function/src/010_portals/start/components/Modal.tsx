import "./Modal.css";

type ModalPropsType = {
  handleCloseClick: (value: React.MouseEvent<HTMLButtonElement>) => void
}

const Modal = ({ handleCloseClick }: ModalPropsType) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>モーダル</p>
        <button type="button" onClick={handleCloseClick}>
          閉じる
        </button>
      </div>
    </div>
  );
};

export default Modal;
