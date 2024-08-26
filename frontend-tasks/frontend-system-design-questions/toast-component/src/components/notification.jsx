/* eslint-disable react/prop-types */
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./notification.css";

const iconStyles = {marginRight: "10px"};
const icons = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};

const Notification = ({type = "info", message, onClose = () => {}, id}) => {

  return (
    <div className={`notification ${type} pop-in fade-out`}>
      {/* icon */}
      {icons[type]}
      {/* message */}
      {message}
      {/* close button */}
      <AiOutlineClose
        color="white"
        className="closeBtn"
        onClick={() => onClose(id)}
      />
    </div>
  );
};

export default Notification;
