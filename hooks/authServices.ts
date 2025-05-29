import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import { auth } from '../utils/firebase';

// sign up function
export async function signUp(email: string, password: string): Promise<UserCredential> {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw error;
    }
}

// sign in function 
export async function signIn(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user
    } catch (error) {
        throw error;
    }
}

// sign out function
export async function signOutUser() {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
}