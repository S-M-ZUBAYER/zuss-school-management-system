import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from '../firebase/firebase.config';



export const AuthContext = createContext()

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [schoolName, setSchoolName] = useState(null)
    const [loading, setLoading] = useState(true);
    const [teachersList, setTeachersList] = useState([]);

    const [className, setClassName] = useState('Class1');
    const [purpose, setPurpose] = useState('');
    const [amount, setAmount] = useState('');
    const [isPaid, setIsPaid] = useState();
    const [payments, setPayments] = useState({
        Class1: [],
        Class2: [],
        Class3: [],
        Class4: [],
        Class5: [],
        Class6: [],
        Class7: [],
        Class8: [],
        Class9: [],
        Class10: [],
        Class11: [],
        Class12: [],
    });


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, loading, setLoading, createUser, signIn, logOut, className, setClassName, purpose, setPurpose, amount, setAmount, payments, setPayments, teachersList, setTeachersList, isPaid, setIsPaid, schoolName, setSchoolName }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;