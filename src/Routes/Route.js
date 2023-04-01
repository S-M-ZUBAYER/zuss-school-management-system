import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main"
import Admin from "../Pages/AdminPage/Admin";
import Contact from "../Pages/ContactPage/Contact";
import Home from "../Pages/Homepage/Home/Home";
import Login from "../Pages/Login/Login";
import MainAdmin from "../Pages/MainAdminPage/MainAdmin";
import Register from "../Pages/Register/Register";
import Students from "../Pages/StudentsPage/Students,";
import Teachers from "../Pages/TeachersPage/Teachers";

export const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <MainAdmin></MainAdmin>,
    // },
    {

        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/teacher",
                element: <Teachers></Teachers>,
                children:
                    [

                    ]
            },
            {
                path: "/student",
                element: <Students></Students>
            },
            {
                path: "/admin",
                element: <Admin></Admin>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    }




])