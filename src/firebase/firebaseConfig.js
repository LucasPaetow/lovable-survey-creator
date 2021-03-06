import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

const config = {
  apiKey: "AIzaSyBcXSKOjBOakhbQPHyD551jSRhqQqLeIIw",
  authDomain: "feedback-creator.firebaseapp.com",
  databaseURL: "https://feedback-creator.firebaseio.com",
  projectId: "feedback-creator",
  storageBucket: "feedback-creator.appspot.com",
  messagingSenderId: "715056485843",
  appId: "1:715056485843:web:b66a9710f88e0958"
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;
const fieldValue = firebase.firestore.FieldValue;

// firebase collections
const testersCollection = db.collection("testers");
const feedbackCollection = db.collection("feedback");
const commentsCollection = db.collection("comments");
const surveyCollection = db.collection("surveys");
const usersCollection = db.collection("users");

export {
  auth,
  currentUser,
  fieldValue,
  testersCollection,
  feedbackCollection,
  commentsCollection,
  surveyCollection,
  usersCollection
};
