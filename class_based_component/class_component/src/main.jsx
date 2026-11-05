import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './profile.jsx'
import Counter from './counter.jsx'
import Student_Profile_Manager from './Student_profile.jsx'
import { Students, Apps } from './Student.jsx'
import Application from './student_card.jsx'

import ParentStudent from './student_management_system.jsx'


import StudentDashboard from './student_dash.jsx'

import Parent from './Student_score.jsx'


import AdvancedCounter from './adv_manager.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Profile></Profile>
    <Counter></Counter> */}

    {/* <Student_Profile_Manager></Student_Profile_Manager> */}
      {/* <Apps/>
      <Students name="Rahul" age={22}></Students> */}
      {/* <Application></Application> */}
      {/* <ParentStudent/> */}

    {/* <StudentDashboard/> */}

    {/* <Parent/> */}

    <AdvancedCounter/>
  </StrictMode>,
)
