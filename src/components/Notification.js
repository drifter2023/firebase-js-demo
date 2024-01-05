import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { requestPermission, onMessageListener } from "../Firebase";

function Notification() {
  const [notification, setNotification] = useState({ title: "", body: "" });
  useEffect(() => {
    requestPermission();
    const unsubscribe = onMessageListener().then((payload) => {
        // render in webpage
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
      console.log("asdf");
      toast.success(
        `${payload?.notification?.title}: ${payload?.notification?.body}`,
        {
          duration: 6000,
          position: "top-right", //section of the browser page
        }
      );
    });
    return () => {
      unsubscribe.catch((err) => console.log("failed: ", err));
    };
  }, []);
  return (
    <div>
      <Toaster />
    </div>
  );
}
export default Notification;
