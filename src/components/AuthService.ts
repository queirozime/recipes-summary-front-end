import * as firebaseAuth from 'firebase/auth';
import {auth} from '../firebase'

export default class AuthService{
    login(email:string,password:string){
        return firebaseAuth.signInWithEmailAndPassword(auth,email,password)
        .then(user => {
            console.log(user);
            return user;
        })
        .catch(error => {
            console.log("erro",error);
            return Promise.reject(error);
        });
    }
    getLoggedUser(){
        return new Promise(resolve => {
            firebaseAuth.onAuthStateChanged(auth,(user:any) => {
                console.log(user);
                resolve(user);
            })
        });
    }
    logout(){
        return firebaseAuth.signOut(auth)
    }
}