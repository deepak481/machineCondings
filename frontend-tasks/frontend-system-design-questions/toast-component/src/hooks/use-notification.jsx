import {useCallback, useRef, useState} from "react";
import Notification from "../components/notification";

const useNotification = (position = "top-right") => {
  const [notification, setNotification] = useState([]);
  const timers = useRef({})

  const triggerNotification = useCallback((notificationProps) => {
    document.getElementById
    setNotification(prevNotification => {
      const updatedNotification = [...prevNotification, notificationProps];
      return updatedNotification
    })

    timers.current[notificationProps.id] = setTimeout(() => {
      setNotification((prevNotification) => 
        prevNotification.filter(el => el.id !== notificationProps.id)
      )
      delete timers.current[notificationProps.id]
    }, notificationProps.duration)
  }, []);

  const onClose = (id) => {
    clearTimeout(timers.current[id])
    setNotification((prevNotification) => 
        prevNotification.filter(el => el.id !== id)
      )
    delete timers.current[id]
  }


  const NotificationComponent =
    <div className={`${position}`}>
       {notification.map(ob => (
        <div key={ob.id}>
          <Notification {...ob} onClose={onClose} />
        </div>
       ))}
      
    </div>


  return {NotificationComponent, triggerNotification};
};

export default useNotification;
