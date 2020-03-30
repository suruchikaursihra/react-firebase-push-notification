import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
    // Project Settings => Add Firebase to your web app
    messagingSenderId: "1092757106873",
    projectId: "react-firebase-authentication0",
    apiKey: "AIzaSyAExOetRPfUIuSyuv1SXwzwOjMeYQBuUXU",
    appId: "1:1092757106873:web:a58dac8303dda7c2"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    "BDmb1xojnKXD0m1z0jIb1m4LuFLDVSQlXls7-A_TtSZAVI86-glxlIJhL05j4z76K5xmHVoFmkO5y0-X97Hask4"
);
export { messaging };