import firebase from './firebase'
import 'firebase/firestore';

// Initialize Cloud Firestore through Firebase
export const firedb = firebase.firestore();

// Disable deprecated features
firedb.settings({
  timestampsInSnapshots: true
});

export default firedb;