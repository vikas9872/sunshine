import React from 'react';
import { useNavigate } from 'react-router-dom'
const Ngoanduser = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-full bg-[url(/Images/empanduserBkgd.jpg)] bg-cover">
      <div className="flex flex-col md:flex-row w-full h-full justify-evenly items-center">
        <button className="flex flex-col items-center justify-center cursor-pointer gap-2 h-[60%] hover:shadow-lg" data-aos="zoom-in" onClick={() => navigate("/ngo")}>
          <img src="./Images/profile.png" className="h-[150px] md:h-[300px] w-[150px] md:w-[300px]" alt="user_icon" />
          <h1 className="text-black font-bold backdrop-blur-0 backdrop-saturate-200 bg-white/60 rounded-lg border border-gray-300/30 shadow-lg p-4">Employee</h1>
        </button>
        <button className="flex flex-col items-center justify-center cursor-pointer gap-2 h-[60%] hover:shadow-lg" data-aos="zoom-in" onClick={() => navigate("/user")}>
          <img src="./Images/profile.png" className="h-[150px] md:h-[300px] w-[150px] md:w-[300px]" alt="user_icon" />
          <h1 className="text-black font-bold backdrop-blur-0 backdrop-saturate-200 bg-white/60 rounded-lg border border-gray-300/30 shadow-lg p-4">User</h1>
        </button>
      </div>
    </div>
  );
};

export default Ngoanduser;
