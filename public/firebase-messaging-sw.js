importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

//the Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyBK5atQyik9tur5fImmw4rxOhNcgoSuBXg",
  authDomain: "test-for-rb-6defc.firebaseapp.com",
  projectId: "test-for-rb-6defc",
  storageBucket: "test-for-rb-6defc.appspot.com",
  messagingSenderId: "39917141241",
  appId: "1:39917141241:web:960c1cbfb2ce7e95913628",
  measurementId: "G-MN0TJ4R11E",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
