import React, { useRef, useState } from 'react';
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { courses } from '../CoursesList/Courseslist';

const Registration = () => {
  const usernameRef = useRef();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseDetails, setCourseDetails] = useState({ duration: '', mode: '' });

  const handleCourseChange = (e) => {
    const courseName = e.target.value;
    setSelectedCourse(courseName);

    // Find the selected course details
    const course = courses.find((c) => c.name === courseName);
    if (course) {
      setCourseDetails({ duration: course.duration, mode: course.mode });
    } else {
      setCourseDetails({ duration: '', mode: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = usernameRef.current.value;
    try {
      await addDoc(collection(db, 'registeredCourses'), {
        userName,
        course: selectedCourse,
        duration: courseDetails.duration,
        mode: courseDetails.mode,
        registrationDate: new Date().toISOString(),
      });
      alert('Registration successful!');
      usernameRef.current.value = '';
      setSelectedCourse('');
      setCourseDetails({ duration: '', mode: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-10 p-4 bg-[url(/Images/complaintBkgd.jpg)] bg-cover">
      <h1 className="font-extrabold text-4xl md:text-8xl text-black">
        Course Registration
      </h1>
      <form
        className="w-full md:w-[50%] flex flex-col gap-4 p-4 backdrop-blur-0 backdrop-saturate-200 bg-white/60 rounded-lg border border-gray-300/30 shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-sm text-black">User Name</label>
            <input
              type="text"
              className="border-2 p-2 outline-none"
              required
              ref={usernameRef}
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Select Course</label>
          <select
            className="border-2 p-2 outline-none"
            value={selectedCourse}
            onChange={handleCourseChange}
            required
          >
            <option value="">-- Select a Course --</option>
            {courses.map((course, index) => (
              <option key={index} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-sm text-black">Duration</label>
            <input type="text" className="border-2 p-2 outline-none" value={courseDetails.duration} readOnly placeholder="Duration"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-2 w-[100%]">
            <label className="text-sm text-black">Mode</label>
            <input type="text" className="border-2 p-2 outline-none" value={courseDetails.mode} readOnly placeholder="Mode"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="border-2 border-black p-2 w-full md:w-full cursor-pointer text-black hover:bg-black hover:text-white"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;