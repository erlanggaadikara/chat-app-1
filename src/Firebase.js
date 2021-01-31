import firebase from "firebase";

const config = {
  projectId: "kelasly-chat-dev",
  apiKey: "AIzaSyAILcyW_jzYmMTQ8Z_hMKPfr4wU6yJ0Zgs",
  databaseURL: "https://kelasly-chat-dev-default-rtdb.firebaseio.com",
};
firebase.initializeApp(config);

export default firebase;
