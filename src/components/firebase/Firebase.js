import app from 'firebase/app';

import config from './config';

import 'firebase/auth';
import 'firebase/firestore';
 
class Firebase {
  constructor() {
    app.initializeApp(config);
    
    this.auth = app.auth;
    this.firestore = app.firestore;
  }
}
 
export default Firebase;
