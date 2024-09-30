import "./Toast.css";

type ToastPropsType = {
  visible :boolean
  handleCloseClick : (value: React.MouseEvent<HTMLButtonElement>) => void
}

const Toast = ({ visible, handleCloseClick }: ToastPropsType) => {
  const toastClassName = visible ? "toast is-visible" : "toast";
  return (
    <div className={toastClassName}>
      <div className="toast__content">
        <p>トースト</p>
        <button
          type="button"
          className="toast__button"
          onClick={handleCloseClick}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
