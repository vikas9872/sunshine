import React, { useRef } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Manager = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate();
  const login = async (event) => {
    event.preventDefault()
    try {
      const email = emailRef.current.value
      const password = passwordRef.current.value
      const managerCredential = await signInWithEmailAndPassword(auth, email, password)
      navigate("/managerdashboard")
      console.log('manager logged in:', managerCredential.manager)
    } catch (error) {
      console.error('Error logging in manager:', error)
      alert(error.message)
    }
  }

  return (
    <div className='h-full w-full flex flex-col items-center justify-center gap-10 p-4 bg-[url(/Images/formsBkgd.jpg)] bg-cover'>
      <h1 className='font-extrabold text-4xl text-black md:text-8xl' data-aos="fade-left" >Log In</h1>
      <form className='w-full md:w-[50%] flex flex-col gap-4 p-4 backdrop-blur-0 backdrop-saturate-200 bg-white/60 rounded-lg border border-gray-300/30 shadow-lg'>
        <div className='flex flex-col gap-2'>
          <label className='text-lg'>Email</label>
          <input type="email" className='border-2 p-2 outline-none' ref={emailRef} />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-lg'>Password</label>
          <input type="password" className='border-2 p-2 outline-none' ref={passwordRef} />
        </div>
        <div className='flex items-center justify-center'>
          <button type="submit" className='border-2 border-black p-2 w-full md:w-full cursor-pointer hover:bg-black hover:text-white' onClick={login}>
            Log In
          </button>
        </div>
      </form>
    </div>
  )
}

export default Manager