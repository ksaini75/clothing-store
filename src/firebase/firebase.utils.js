import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={

        apiKey: "AIzaSyCT_ZJ979nOdxj-f8YpJzdDOcd6p-Nn-G0",
        authDomain: "react-clothing-s.firebaseapp.com",
        databaseURL: "https://react-clothing-s.firebaseio.com",
        projectId: "react-clothing-s",
        storageBucket: "react-clothing-s.appspot.com",
        messagingSenderId: "236675668554",
        appId: "1:236675668554:web:e3bdcb553993d8480c64b3",
        measurementId: "G-KDY63TC95D"
      
};


export const createUserProfileDocument = async ( userAuth, additionalData ) => {

        if( !userAuth ) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists){
           const { displayName, email } = userAuth;
           const createdAt = new Date();

           try {
                   await userRef.set({
                           displayName,
                           email,
                           createdAt,
                           ...additionalData
                   })

           }
           catch (error){
                        console.log('error creating user', error.message);
           }
        }

        return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;