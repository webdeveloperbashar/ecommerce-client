import { ImCheckmark, ImCross } from "react-icons/im";
const ToastNotification = ({ message, error, success, showNotify, notifyClose }) => {
  return (
    <div onClick={()=>notifyClose()} className={`${showNotify && 'toast__wrapper show'} toast__wrapper`}>
      {success && (
        <p className="success">
          <ImCheckmark className="toast__icon" /> {message}{" "}
        </p>
      )}
      {error && (
        <p className="error">
          <ImCross className="toast__icon" /> {message}{" "}
        </p>
      )}
    </div>
  );
};

export default ToastNotification;
