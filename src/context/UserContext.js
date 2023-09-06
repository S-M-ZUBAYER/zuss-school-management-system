import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from '../firebase/firebase.config';



export const AuthContext = createContext()

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [schools, setSchools] = useState([]);
    const [schoolName, setSchoolName] = useState(null);
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true);
    const [teachersList, setTeachersList] = useState([]);

    // useState for calender
    const [year, setYear] = useState(new Date().getFullYear());
    const [startMonth, setStartMonth] = useState(1);
    const [endMonth, setEndMonth] = useState(12);
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState('');
    const [eventColor, setEventColor] = useState('#ff0000');
    const [showModal, setShowModal] = useState(false);
    const [uploadedImage, setUploadedImage] = useState('');
    const [currentSchoolCode, setCurrentSchoolCode] = useState('');



    const [isPaid, setIsPaid] = useState();





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

    }, []);



    useEffect(() => {
        const storedUser = localStorage.getItem("schoolUser");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setSchoolName(parsedUser?.schoolName);
                setCurrentSchoolCode(parsedUser?.schoolCode);
                setLoading(false)
            } catch (error) {
                console.log('Error parsing user from local storage', error);
                setLoading(false)
            }

        }
        setLoading(false)
    }, [])


    const authInfo = { user, schools, setSchools, schoolName, currentSchoolCode, setCurrentSchoolCode, events, setEvents, loading, setLoading, createUser, signIn, logOut, teachersList, setTeachersList, isPaid, setIsPaid, setSchoolName, year, setYear, startMonth, setStartMonth, endMonth, setEndMonth, eventColor, setEventColor, showModal, setShowModal, selectedDate, setSelectedDate, eventName, setEventName, uploadedImage, setUploadedImage }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;