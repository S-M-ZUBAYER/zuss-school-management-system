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
import Students from "../Pages/StudentsPage/Students,";
import Teachers from "../Pages/TeachersPage/Teachers";
import SchoolIntro from "../Pages/IntroductionPage/IntroDashboard/SchoolIntro";
import Notice from "../Pages/IntroductionPage/IntroDashboard/Notice";
import Activities from "../Pages/IntroductionPage/IntroDashboard/Activities";
import SalaryStatus from "../Pages/StaffPage/StaffDashboard/SalaryStatus";
import StdInformation from "../Pages/TeachersPage/TeacherDashboard/StdInformation";
import ClassRoutine from "../Pages/TeachersPage/TeacherDashboard/ClassRoutine";
import Calender from "../Pages/TeachersPage/TeacherDashboard/Calender";
import PaymentCollection from "../Pages/TeachersPage/TeacherDashboard/PaymentCollection";
import TransferCertificate from "../Pages/TeachersPage/TeacherDashboard/Certificates/TransferCertificate";
import CharacterCertificate from "../Pages/TeachersPage/TeacherDashboard/Certificates/CharacterCertificate";
import CourseCompletionCertificate from "../Pages/TeachersPage/TeacherDashboard/Certificates/CourseCompletionCertificate";
import StudentAttendanceStatus from "../Pages/StudentsPage/StudentDashboard/StudentAttendance/StudentAttendanceStatus";
import StudentPaymentSystem from "../Pages/StudentsPage/StudentDashboard/StudentPaymentSystem";
import StdTcrIdCard from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/StdTcrIdCard";
import LeaveApplicationTcr from "../Pages/TeachersPage/TeacherDashboard/LeaveApplication";
import AllStaffInfo from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/AllStaffInfo";
import AllStaffIntro from "../Pages/IntroductionPage/IntroDashboard/AllStaffIntro";
import TcrLeaveApplication from "../Pages/TeachersPage/TeacherDashboard/TcrLeaveApplication";
import AddResultCalculation from "../Pages/TeachersPage/TeacherDashboard/AddResultCalculation";
import AddSalary from "../Pages/AdminPage/AdminDashboard/Salary/addSalary";
import AcademicCalender from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/AcademicCalenderPage/AcademicCalender";
import AttendanceTaken from "../Pages/AttendancePage/AttendanceTaken";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddNotice from "../Pages/AdminPage/AddNotice";
import AddStudent from "../Pages/AdminPage/AddStudent/AddStudent";
import AddStaff from "../Pages/AdminPage/AddStaff/AddStaff";
import AllStudent from "../Pages/AdminPage/AllStudent/AllStudent";
import Admission from "../Pages/AdmissionPage/Admission";
import AdmissionInfo from "../Pages/AdminPage/AdminDashboard/Admission/AdmissionInfo";
import AddEvents from "../Pages/AdminPage/AddEvents";
import ActivitiesDetails from "../Pages/IntroductionPage/IntroDashboard/ActivitiesDetails";
import IntroductionDashboard from "../Pages/IntroductionPage/IntroDashboard/IntroductionDashboard";
import AdminDashboard from "../Pages/AdminPage/AdminDashboard/AdminPageDashboard/AdminDashboard";
import StaffDashboard from "../Pages/StaffPage/StaffDashboard";
import StudentDashboard from "../Pages/StudentsPage/StudentDashboard";
import TeacherDashboard from "../Pages/TeachersPage/TeacherDashboard";
import AddClassInfo from "../Pages/AdminPage/AdminDashboard/Admission/AddClassInfo/AddClassInfo";
import Apply from "../Pages/AdmissionPage/Apply";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainAdmin></MainAdmin>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {

        path: "/:name",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/:name",
                element: <Home></Home>,
            },
            {
                path: "/:name/admission",
                element: <Admission></Admission>
            },
            {
                path: "/:name/admission/apply",
                element: <Apply></Apply>
            },
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
                path: '/:name/intro/dashboard',
                element: <IntroductionDashboard></IntroductionDashboard>
            },
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
                element: <Activities></Activities>,

            },
            {
                path: '/:name/intro/activities/details/:id',
                element: <ActivitiesDetails></ActivitiesDetails>,

            },

            {
                path: '/:name/intro/calender',
                element: <Calender></Calender>
            }

        ]

    },
    {

        path: '/:name/teacher',
        element: <Teachers></Teachers>,
        children: [
            {
                path: '/:name/teacher/dashboard',
                element: <TeacherDashboard></TeacherDashboard>
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
            {
                path: '/:name/teacher/attendance',
                element: <AttendanceTaken></AttendanceTaken>
            }


        ]

    },
    {

        path: '/:name/student',
        element: <Students></Students>,
        children: [
            {
                path: '/:name/student/dashboard',
                element: <StudentDashboard></StudentDashboard>
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
            {
                path: '/:name/student/calender',
                element: <Calender></Calender>
            }

        ]

    },
    {

        path: '/:name/staff',
        element: <Staff></Staff>,
        children: [
            {
                path: '/:name/staff/dashboard',
                element: <StaffDashboard></StaffDashboard>
            },
            {
                path: '/:name/staff/leave',
                element: <LeaveApplication></LeaveApplication>
            },

            {
                path: '/:name/staff/salary',
                element: <SalaryStatus></SalaryStatus>
            },
            {
                path: '/:name/staff/atd',
                element: <StaffAttendanceSheet></StaffAttendanceSheet>
            },
            {
                path: '/:name/staff/calender',
                element: <Calender></Calender>
            }

        ]

    },
    {

        path: '/:name/admin',
        element: <Admin></Admin>,
        children: [
            {
                path: '/:name/admin/dashboard',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: '/:name/admin/calender',
                element: <AcademicCalender></AcademicCalender>
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
                path: '/:name/admin/student',
                element: <AllStudent></AllStudent>
            },
            {
                path: '/:name/admin/idCard',
                element: <StdTcrIdCard></StdTcrIdCard>
            },
            {
                path: '/:name/admin/salary',
                element: <AddSalary></AddSalary>
            },
            {
                path: '/:name/admin/addNotice',
                element: <AddNotice></AddNotice>
            },
            {
                path: '/:name/admin/addEvents',
                element: <AddEvents></AddEvents>
            },
            {
                path: '/:name/admin/Student_attendance',
                element: <StudentAttendanceStatus></StudentAttendanceStatus>
            },
            {
                path: '/:name/admin/teacher_attendance',
                element: <Tcr_Atd_Sheet></Tcr_Atd_Sheet>
            },
            {
                path: '/:name/admin/addStudent',
                element: <AddStudent></AddStudent>
            },
            {
                path: '/:name/admin/addStaff',
                element: <AddStaff></AddStaff>
            },
            {
                path: '/:name/admin/admission',
                element: <AdmissionInfo></AdmissionInfo>
            },
            {
                path: '/:name/admin/class',
                element: <AddClassInfo></AddClassInfo>
            }

        ]

    }


])