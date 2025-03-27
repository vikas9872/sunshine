import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  useEffect(() => {
    const fetchRegisteredCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'registeredCourses'));
        const courses = await Promise.all(
          querySnapshot.docs.map(async (courseDoc) => {
            const courseData = courseDoc.data();
            return {
              ...courseData
            };
          })
        );
        setRegisteredCourses(courses);
      } catch (error) {
        console.error('Error fetching registered courses: ', error);
      }
    };

    fetchRegisteredCourses();
  }, []);

  return (
    <div className='h-full w-full flex flex-col items-center gap-10 p-4'>
      <h1 className='font-extrabold text-3xl md:text-8xl text-black'>Manager Dashboard</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Course Name</th>
              <th className="border border-gray-300 px-4 py-2">User Name</th>
              <th className="border border-gray-300 px-4 py-2">Duration</th>
              <th className="border border-gray-300 px-4 py-2">Mode</th>
              <th className="border border-gray-300 px-4 py-2">Registration Date</th>
            </tr>
          </thead>
          <tbody>
            {registeredCourses.map((course, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{course.course}</td>
                <td className="border border-gray-300 px-4 py-2">{course.userName}</td>
                <td className="border border-gray-300 px-4 py-2">{course.duration}</td>
                <td className="border border-gray-300 px-4 py-2">{course.mode}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(course.registrationDate).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;