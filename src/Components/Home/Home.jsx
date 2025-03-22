import React from 'react'
const Home = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse justify-center items-center h-full'>
      <div className='w-full md:w-[50%]'>
        <h1 className='font-extrabold text-3xl md:text-6xl p-4'>Empowering Minds, Transforming Lives</h1>
        <p className='p-4'>Providing quality education to underprivileged children, fostering knowledge, and creating opportunities for a brighter tomorrow. Our mission is to bridge the educational gap and empower every child with the tools to succeed.</p>
      </div>
      <div className='w-full md:w-[50%]'>
        <img src="/Images/home.jpg" alt="home_image" />
      </div>
    </div>
  )
}

export default Home
