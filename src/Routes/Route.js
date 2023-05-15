import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main"
import Admin from "../Pages/AdminPage/Admin";
import AllResultSheet from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/AllResultSheet";
import Std_Atd_Sheet from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/Std_Atd_Sheet";
import Tcr_Atd_Sheet from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/Tcr_Atd_Sheet";
import Contact from "../Pages/ContactPage/Contact";
import Home from "../Pages/Homepage/Home/Home";
import Introduction from "../Pages/IntroductionPage/Introduction";
import Login from "../Pages/Login/Login";
import MainAdmin from "../Pages/MainAdminPage/MainAdmin";
import Register from "../Pages/Register/Register";
import Staff from "../Pages/StaffPage/Staff";
import LeaveApplication from "../Pages/StaffPage/StaffDashboard/LeaveApplication";
import StaffAttendanceSheet from "../Pages/StaffPage/StaffDashboard/StaffAttendanceSheet";
import StaffProfile from "../Pages/StaffPage/StaffDashboard/StaffProfile";
import Students from "../Pages/StudentsPage/Students,";
import Teachers from "../Pages/TeachersPage/Teachers";
import AdminProfile from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/AdminProfile";
import SchoolIntro from "../Pages/IntroductionPage/IntroDashboard/SchoolIntro";
import Notice from "../Pages/IntroductionPage/IntroDashboard/Notice";
import Activities from "../Pages/IntroductionPage/IntroDashboard/Activities";
import SalaryStatus from "../Pages/StaffPage/StaffDashboard/SalaryStatus";
import TeacherProfile from "../Pages/TeachersPage/TeacherDashboard/TeacherProfile";
import StdInformation from "../Pages/TeachersPage/TeacherDashboard/StdInformation";
import ClassRoutine from "../Pages/TeachersPage/TeacherDashboard/ClassRoutine";
import Calender from "../Pages/TeachersPage/TeacherDashboard/Calender";
import PaymentCollection from "../Pages/TeachersPage/TeacherDashboard/PaymentCollection";
import TransferCertificate from "../Pages/TeachersPage/TeacherDashboard/Certificates/TransferCertificate";
import CharacterCertificate from "../Pages/TeachersPage/TeacherDashboard/Certificates/CharacterCertificate";
import CourseCompletionCertificate from "../Pages/TeachersPage/TeacherDashboard/Certificates/CourseCompletionCertificate";
import StudentProfile from "../Pages/StudentsPage/StudentDashboard/StudentProfile";
import StudentAttendanceStatus from "../Pages/StudentsPage/StudentDashboard/StudentAttendance/StudentAttendanceStatus";
import StudentPaymentSystem from "../Pages/StudentsPage/StudentDashboard/StudentPaymentSystem";
import StdTcrIdCard from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/StdTcrIdCard";
import LeaveApplicationTcr from "../Pages/TeachersPage/TeacherDashboard/LeaveApplication";
import AllStaffInfo from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/AllStaffInfo";
import AllStaffIntro from "../Pages/IntroductionPage/IntroDashboard/AllStaffIntro";
import TcrLeaveApplication from "../Pages/TeachersPage/TeacherDashboard/TcrLeaveApplication";
import AddResultCalculation from "../Pages/TeachersPage/TeacherDashboard/AddResultCalculation";
import AcademicCalendar from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/AcademicCalander/AcademicCalender";
import AddSalary from "../Pages/AdminPage/AdminDashboard/Salary/addSalary";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainAdmin></MainAdmin>,
    },
    {

        path: "/:name",
        element: <Main></Main>,
        children: [
            {
                path: "/:name",
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
                path: "/:name/contact",
                element: <Contact></Contact>
            },
            {
                path: "/:name/login",
                element: <Login></Login>
            },
            {
                path: "/:name/register",
                element: <Register></Register>
            },
        ]
    },
    {

        path: '/:name/intro',
        element: <Introduction></Introduction>,
        children: [
            {
                path: '/:name/intro/schoolIntro',
                element: <SchoolIntro></SchoolIntro>
            },
            {
                path: '/:name/intro/notice',
                element: <Notice></Notice>
            },
            {
                path: '/:name/intro/allStaffIntro',
                element: <AllStaffIntro></AllStaffIntro>
            },
            {
                path: '/:name/intro/activities',
                element: <Activities></Activities>
            }

        ]

    },
    {

        path: '/:name/teacher',
        element: <Teachers></Teachers>,
        children: [
            {
                path: '/:name/teacher/profile',
                element: <TeacherProfile></TeacherProfile>
            },
            {
                path: '/:name/teacher/information',
                element: <StdInformation></StdInformation>
            },
            {
                path: '/:name/teacher/routine',
                element: <ClassRoutine></ClassRoutine>
            },
            {
                path: '/:name/teacher/calender',
                element: <Calender></Calender>
            },
            {
                path: '/:name/teacher/leave',
                element: <TcrLeaveApplication></TcrLeaveApplication>
            },
            {
                path: '/:name/teacher/payment',
                element: <PaymentCollection></PaymentCollection>
            },
            {
                path: '/:name/teacher/result',
                element: <AddResultCalculation></AddResultCalculation>
            },
            {
                path: '/:name/teacher/transfer',
                element: <TransferCertificate></TransferCertificate>
            },
            {
                path: '/:name/teacher/character',
                element: <CharacterCertificate></CharacterCertificate>
            },
            {
                path: '/:name/teacher/completion',
                element: <CourseCompletionCertificate></CourseCompletionCertificate>
            },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/booking/${params?.id}`)
            // }

        ]

    },
    {

        path: '/:name/student',
        element: <Students></Students>,
        children: [
            {
                path: '/:name/student/stdProfile',
                element: <StudentProfile></StudentProfile>
            },
            {
                path: '/:name/student/StdAttendance',
                element: <StudentAttendanceStatus></StudentAttendanceStatus>
            },
            {
                path: '/:name/student/payment',
                element: <StudentPaymentSystem></StudentPaymentSystem>
            },
            {
                path: '/:name/student/leave',
                element: <LeaveApplication></LeaveApplication>
            },
            // {
            //     path: '/:name/student/allSellers',
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

        path: '/:name/staff',
        element: <Staff></Staff>,
        children: [
            {
                path: '/:name/staff/leave',
                element: <LeaveApplication></LeaveApplication>
            },
            {
                path: '/:name/staff/profile',
                element: <StaffProfile></StaffProfile>
            },
            {
                path: '/:name/staff/salary',
                element: <SalaryStatus></SalaryStatus>
            },
            {
                path: '/:name/staff/atd',
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

        path: '/:name/admin',
        element: <Admin></Admin>,
        children: [
            {
                path: '/:name/admin/calender',
                element: <AcademicCalendar></AcademicCalendar>
            },
            {
                path: '/:name/admin/result',
                element: <AllResultSheet></AllResultSheet>
            },
            {
                path: '/:name/admin/staff',
                element: <AllStaffInfo></AllStaffInfo>
            },
            {
                path: '/:name/admin/idCard',
                element: <StdTcrIdCard></StdTcrIdCard>
            },
            {
                path: '/:name/admin/profile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: '/:name/admin/salary',
                element: <AddSalary></AddSalary>
            },
            {
                path: '/:name/admin/Student_attendance',
                element: <StudentAttendanceStatus></StudentAttendanceStatus>
            },
            {
                path: '/:name/admin/teacher_attendance',
                element: <Tcr_Atd_Sheet></Tcr_Atd_Sheet>
            }

        ]

    },



])