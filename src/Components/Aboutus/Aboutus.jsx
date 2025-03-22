import React from 'react'
const Aboutus = () => {
    return (
        <div className='h-full flex flex-col-reverse md:flex-row-reverse items-center'>
            <div className="w-full md:w-[50%]">
                <img src="/Images/aboutus.jpg" alt="aboutus_img" />
            </div>
            <div className='flex flex-col w-full md:w-[50%]'>
                <div className='p-[20px]'>
                    <h1 className='font-bold text-4xl md:text-6xl'>About Us</h1>
                    <p className='pt-2 text-1xl'>We are a dedicated NGO committed to providing quality education to underprivileged children, empowering them with the knowledge and skills needed to build a brighter future. Through accessible learning programs, mentorship, and community support, we strive to break the cycle of poverty by nurturing young minds and unlocking their potential.</p>
                </div>
                <div className='p-[20px]'>
                    <h1 className='font-bold text-4xl md:text-6xl'>Mission</h1>
                    <p className='pt-2 text-1xl'>Our mission is to ensure that every child, regardless of their background, has access to quality education. We aim to create equal learning opportunities, promote literacy, and foster personal growth. By equipping children with the right tools and support, we strive to empower them to become confident, self-reliant individuals who can contribute meaningfully to society.</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
