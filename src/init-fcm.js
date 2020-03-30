import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
    // Project Settings => Add Firebase to your web app
    messagingSenderId: "109....6873",
    projectId: "reac....tication",
    apiKey: "AIz....MeYQBu.....UXU",
    appId: "1:10....dda7......c2"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    "BDmb.......86-glxlI........Hask4"
);
export { messaging };
