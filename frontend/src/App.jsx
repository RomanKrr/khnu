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
import Certifications from './pages/Certifications'
import TypesOfOccupations from './pages/TypesOfOccupations'
import Documents from './pages/Documents'

function App() {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])


  return (
    <div className='main'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/allYears" element={<AllYears />} />
          <Route path="/electiveDisciplines" element={authUser ? <ElectiveDisciplines /> : <Navigate to="/login" /> } />
          <Route path="/ratingOfSpecialties" element={authUser ? <RatingOfSpecialties /> : <Navigate to="/login" /> } />
          <Route path='/scheduleByGroups' element={authUser ? <ScheduleByGroups /> : <Navigate to="/login" /> } />
          <Route path='/scheduleByTeachers' element={authUser ? <ScheduleByTeachers /> : <Navigate to="/login" /> } />
          <Route path='/studentProfile' element={authUser ? <StudentProfile /> : <Navigate to="/login" />} />
          <Route path='/notificationCenter' element={authUser ? <NotificationCenter /> : <Navigate to="/login" /> } />
          <Route path='/individualStudyPlan' element={authUser ? <IndividualStudyPlan /> : <Navigate to="/login" /> } />
          <Route path='/portfolio' element={authUser ? <Portfolio /> : <Navigate to="/login" />} />
          <Route path='/achievements' element={authUser ? <Achievements /> : <Navigate to="/login" />} />
          <Route path='/listOfJournals' element={authUser ? <ListOfJournals /> : <Navigate to="/login" />} />
          <Route path='/journal' element={authUser ? <Journal /> : <Navigate to="/login" />} />
          <Route path='/notification' element={authUser ? <Notification /> : <Navigate to="/login" />} />
          <Route path='/workExperience' element={authUser ? <WorkExperience /> : <Navigate to="/login" />} />
          <Route path='/studentOrders' element={authUser ? <StudentOrders /> : <Navigate to="/login" />} />
          <Route path='/certifications' element={authUser ? <Certifications /> : <Navigate to="/login" />} />
          <Route path='/typesOfOccupations' element={authUser ? <TypesOfOccupations  /> : <Navigate to="/login" />} />
          <Route path='/documents' element={authUser ? <Documents  /> : <Navigate to="/login" />} />
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
