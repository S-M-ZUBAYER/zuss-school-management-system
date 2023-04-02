import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main"
import Admin from "../Pages/AdminPage/Admin";
import AcademicCalender from "../Pages/AdminPage/AdminDashboard/AcademicCalender";
import AllResultSheet from "../Pages/AdminPage/AdminDashboard/AllResultSheet";
import IdCard from "../Pages/AdminPage/AdminDashboard/IdCard";
import Std_Atd_Sheet from "../Pages/AdminPage/AdminDashboard/Std_Atd_Sheet";
import Tcr_Atd_Sheet from "../Pages/AdminPage/AdminDashboard/Tcr_Atd_Sheet";
import Contact from "../Pages/ContactPage/Contact";
import Home from "../Pages/Homepage/Home/Home";
import Introduction from "../Pages/IntroductionPage/Introduction";
import Login from "../Pages/Login/Login";
import MainAdmin from "../Pages/MainAdminPage/MainAdmin";
import Register from "../Pages/Register/Register";
import Staff from "../Pages/StaffPage/Staff";
import LeaveApplication from "../Pages/StaffPage/StaffDashboard/LeaveApplication";
import SalaryStatus from "../Pages/StaffPage/StaffDashboard/SalarysStatus";
import StaffAttendanceSheet from "../Pages/StaffPage/StaffDashboard/StaffAttendanceSheet";
import StaffProfile from "../Pages/StaffPage/StaffDashboard/StaffProfile";
import Students from "../Pages/StudentsPage/Students,";
import Teachers from "../Pages/TeachersPage/Teachers";
import AdminProfile from "../Pages/AdminPage/AdminDashboard/AdminProfile";

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
            // {
            //     path: "/teacher",
            //     element: <Teachers></Teachers>,
            //     children:
            //         [

            //         ]
            // },
            // {
            //     path: "/student",
            //     element: <Students></Students>
            // },
            // {
            //     path: "/admin",
            //     element: <Admin></Admin>
            // },
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

        path: '/intro',
        element: <Introduction></Introduction>,
        children: [
            // {
            //     path: '/dashboard/orders',
            //     element: <MyOrders></MyOrders>
            // },
            // {
            //     path: '/dashboard/addProduct',
            //     element: <AddProduct></AddProduct>
            // },
            // {
            //     path: '/dashboard/myProducts',
            //     element: <MyProducts></MyProducts>
            // },
            // {
            //     path: '/dashboard/wishList',
            //     element: <WishList></WishList>
            // },
            // {
            //     path: '/dashboard/allSellers',
            //     element: <AllSellers></AllSellers>
            // },
            // {
            //     path: '/dashboard/allBuyers',
            //     element: <AllBuyers></AllBuyers>
            // },
            // {
            //     path: '/dashboard/reportedItems',
            //     element: <ReportedItems></ReportedItems>
            // },
            // {
            //     path: '/dashboard/allUsers',
            //     element: <AllUser></AllUser>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/booking/${params?.id}`)
            // }

        ]

    },
    {

        path: '/teacher',
        element: <Teachers></Teachers>,
        children: [
            // {
            //     path: '/dashboard/orders',
            //     element: <MyOrders></MyOrders>
            // },
            // {
            //     path: '/dashboard/addProduct',
            //     element: <AddProduct></AddProduct>
            // },
            // {
            //     path: '/dashboard/myProducts',
            //     element: <MyProducts></MyProducts>
            // },
            // {
            //     path: '/dashboard/wishList',
            //     element: <WishList></WishList>
            // },
            // {
            //     path: '/dashboard/allSellers',
            //     element: <AllSellers></AllSellers>
            // },
            // {
            //     path: '/dashboard/allBuyers',
            //     element: <AllBuyers></AllBuyers>
            // },
            // {
            //     path: '/dashboard/reportedItems',
            //     element: <ReportedItems></ReportedItems>
            // },
            // {
            //     path: '/dashboard/allUsers',
            //     element: <AllUser></AllUser>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/booking/${params?.id}`)
            // }

        ]

    },
    {

        path: '/student',
        element: <Students></Students>,
        children: [
            // {
            //     path: '/dashboard/orders',
            //     element: <MyOrders></MyOrders>
            // },
            // {
            //     path: '/dashboard/addProduct',
            //     element: <AddProduct></AddProduct>
            // },
            // {
            //     path: '/dashboard/myProducts',
            //     element: <MyProducts></MyProducts>
            // },
            // {
            //     path: '/dashboard/wishList',
            //     element: <WishList></WishList>
            // },
            // {
            //     path: '/dashboard/allSellers',
            //     element: <AllSellers></AllSellers>
            // },
            // {
            //     path: '/dashboard/allBuyers',
            //     element: <AllBuyers></AllBuyers>
            // },
            // {
            //     path: '/dashboard/reportedItems',
            //     element: <ReportedItems></ReportedItems>
            // },
            // {
            //     path: '/dashboard/allUsers',
            //     element: <AllUser></AllUser>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/booking/${params?.id}`)
            // }

        ]

    },
    {

        path: '/staff',
        element: <Staff></Staff>,
        children: [
            {
                path: '/staff/leave',
                element: <LeaveApplication></LeaveApplication>
            },
            {
                path: '/staff/profile',
                element: <StaffProfile></StaffProfile>
            },
            {
                path: '/staff/salary',
                element: <SalaryStatus></SalaryStatus>
            },
            {
                path: '/staff/atd',
                element: <StaffAttendanceSheet></StaffAttendanceSheet>
            },
            // {
            //     path: '/dashboard/allSellers',
            //     element: <AllSellers></AllSellers>
            // },
            // {
            //     path: '/dashboard/allBuyers',
            //     element: <AllBuyers></AllBuyers>
            // },
            // {
            //     path: '/dashboard/reportedItems',
            //     element: <ReportedItems></ReportedItems>
            // },
            // {
            //     path: '/dashboard/allUsers',
            //     element: <AllUser></AllUser>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/booking/${params?.id}`)
            // }

        ]

    },
    {

        path: '/admin',
        element: <Admin></Admin>,
        children: [
            {
                path: '/admin/calender',
                element: <AcademicCalender></AcademicCalender>
            },
            {
                path: '/admin/result',
                element: <AllResultSheet></AllResultSheet>
            },
            {
                path: '/admin/idCard',
                element: <IdCard></IdCard>
            },
            {
                path: '/admin/profile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: '/admin/Student_attendance',
                element: <Std_Atd_Sheet></Std_Atd_Sheet>
            },
            {
                path: '/admin/teacher_attendance',
                element: <Tcr_Atd_Sheet></Tcr_Atd_Sheet>
            }

        ]

    },



])