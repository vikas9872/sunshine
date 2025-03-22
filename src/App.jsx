import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Aboutus from './Components/Aboutus/Aboutus'
import Ourservices from './Components/OurServices/Ourservices'
import User from './Components/User/User'
import Courses from './Components/Courses/Courses'
import Ngoanduser from './Components/Ngoanduser/Ngoanduser'
import Manager from './Components/Ngo/Manager'
import Dashboard from './Components/Dashboard/Dashboard'
function App() {
  return (
    <>
      <div className='flex flex-col h-[100vh]'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/services' element={<Ourservices/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/ngoanduser' element={<Ngoanduser/>}/>
            <Route path='/ngo' element={<Manager/>}/>
            <Route path='/managerdashboard' element={<Dashboard/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
