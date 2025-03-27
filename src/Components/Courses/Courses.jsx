import React from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../CoursesList/Courseslist';

const Courses = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex items-center justify-center'>
        <h1 className='font-extrabold text-4xl md:text-8xl mb-8' >Our Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          courses.map((course, index) => (
            <div
              key={index}
              className="p-4 border rounded shadow"
            >
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p>Duration: {course.duration}</p>
              <p>Mode: {course.mode}</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={() => navigate('/registration')}
              >
                Register
              </button>
            </div>
          ))
        }
      </div>
    </>
  )
};

export default Courses;