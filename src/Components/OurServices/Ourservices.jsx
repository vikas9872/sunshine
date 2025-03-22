import React from 'react'
const Ourservices = () => {
return (
    <div className='h-full flex flex-col items-center'>
      <h1 className='font-extrabold text-4xl md:text-8xl mb-8' >Our Services</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-[80%]'>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' >
          <img src="/Images/fundamentals.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Engineering Fundamentals</p>
        </div>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' >
          <img src="/Images/computer.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Computer Science and IT</p>
        </div>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' >
          <img src="/Images/electricals.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Electronics and Electrical Engineering</p>
        </div>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' >
          <img src="/Images/literature.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Literature and Language</p>
        </div>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' >
          <img src="/Images/science.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Science and Mathematics</p>
        </div>
        <div className='bg-white p-4 flex flex-col items-center justify-center hover:shadow-lg' >
          <img src="/Images/softskills.jpg" alt="image_not_found" className='h-[200px] w-[200px]' />
          <p>Soft Skills and Personality Development</p>
        </div>
      </div>
    </div>
  )
}

export default Ourservices
