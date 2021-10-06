import app from 'firebase/app';
import 'firebase/database';
 
const config = {
    apiKey: "AIzaSyBXrIcmRVawavpwQvHyX895le-SrC57Gj8",
    authDomain: "authencoffeees.firebaseapp.com",
    projectId: "authencoffeees",
    storageBucket: "authencoffeees.appspot.com",
    messagingSenderId: "721793131837",
    appId: "1:721793131837:web:f659a7e5f242e29ae11154"
};
 
class Firebase {
  constructor() {
    app.initializeApp(config);

    
    this.db = app.database();
  }

  // *** User API ***
 
  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');

}
 
export default Firebase;

