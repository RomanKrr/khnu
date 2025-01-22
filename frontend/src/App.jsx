import './App.css'
import { Toaster } from "react-hot-toast"

import Layout from './components/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllYears from './pages/AllYears'
import ElectiveDisciplines from './pages/ElectiveDisciplines'
import RatingOfSpecialties from './pages/RatingOfSpecialties'
import ScheduleByGroups from './pages/ScheduleByGroups'
import ScheduleByTeachers from './pages/ScheduleByTeachers'
import StudentProfile from './pages/StudentProfile'
import NotificationCenter from './pages/NotificationCenter'
import IndividualStudyPlan from './pages/IndividualStudyPlan'
import Portfolio from './pages/Portfolio'
import Achievements from './pages/Achievements'
import ListOfJournals from './pages/ListOfJournals'
import Journal from './pages/Journal'
import SignUP from './pages/SignUP'
import Login from './pages/Login'
import { axiosInstance } from './lib/axios'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import BlankLayout from './components/BlankLayout'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Notification from './pages/Notification'
import WorkExperience from './pages/WorkExperience'
import StudentOrders from './pages/StudentOrders'
import HomeLayout from './components/HomeLayout'

function App() {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])


  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/allYears" element={<AllYears />} />
          <Route path="/electiveDisciplines" element={<ElectiveDisciplines />} />
          <Route path="/ratingOfSpecialties" element={<RatingOfSpecialties />} />
          <Route path='/scheduleByGroups' element={<ScheduleByGroups />} />
          <Route path='/scheduleByTeachers' element={<ScheduleByTeachers />} />
          <Route path='/studentProfile' element={<StudentProfile />} />
          <Route path='/notificationCenter' element={<NotificationCenter />} />
          <Route path='/individualStudyPlan' element={<IndividualStudyPlan />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/listOfJournals' element={<ListOfJournals />} />
          <Route path='/journal' element={authUser ? <Journal /> : <Navigate to="/login" />} />
          <Route path='/notification' element={authUser ? <Notification /> : <Navigate to="/login" />} />
          <Route path='/workExperience' element={authUser ? <WorkExperience /> : <Navigate to="/login" />} />
          <Route path='/studentOrders' element={authUser ? <StudentOrders /> : <Navigate to="/login" />} />
        </Route>

        <Route element={<BlankLayout />}>
          <Route path='/login' element={!authUser ? <Login /> : <Navigate to="/" />} />
          <Route path='/signUP' element={!authUser ? <SignUP /> : <Navigate to="/" />} />
        </Route>

        <Route element={<HomeLayout />}>
          <Route index="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        </Route>
      </Routes>

      <Toaster />
    </div>
  )
}


export default App
