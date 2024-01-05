import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAwZCzH_q3O0of6X1W-_I45cNKXheHYuww",
  authDomain: "hello-5622b.firebaseapp.com",
  projectId: "hello-5622b",
  storageBucket: "hello-5622b.appspot.com",
  messagingSenderId: "39350094340",
  appId: "1:39350094340:web:b57fc966a0d0f233f74351",
  measurementId: "G-WPYMRF63E8",
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = () => {
  console.log("Requesting User Permission......");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification User Permission Granted.");
      return getToken(messaging, {
        vapidKey: `BC93c7DDxd8KVdZzhm_-INJm80MrFexhs4hY8yTJVS97WCTNfYVnr4uWbXSHoTn2SGA_svQm856mdIn3prVedVw`,
      })
        .then(async (currentToken) => {
          if (currentToken) {
            console.log("Client Token: ", currentToken);
            // update the token into FCM
            // api => fCM =>
          } else {
            console.log("Failed to generate the app registration token.");
          }
        })
        .catch((err) => {
          console.log(
            "An error occurred when requesting to receive the token.",
            err
          );
        });
    } else {
      console.log("User Permission Denied.");
    }
  });
};

requestPermission();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
