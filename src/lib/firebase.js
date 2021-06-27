import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  //   .../ your code here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase as default };
