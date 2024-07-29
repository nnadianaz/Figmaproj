
// src/components/CoverAI.js
import React from 'react';
import icon1 from '../assets/minusicon.svg';
import icon2 from '../assets/plusicon.svg';

const CoverAI = () => {
    

  return (
    <div className=" mt-96 flex flex-col md:flex-row">
      <div className="w-[527px] h-[526px] gap-[56px] ml-[80px]">
        <h1 className="text-[56px] font-semibold leading-4.2 mt-4">Cover AI generates unique, impactful cover letters. Get noticed by recruiters!</h1>
        <p className="text-[18px] leading-[32px] text-[#7E8492]">Elevate Your Website Design Game with Coco <br /> Intuitive Features and Beautiful Templates</p>
        <button className="bg-gradient-to-r from-purple-400 to-blue-500 mt-10 text-white w-[161px] h-[55px] p-[18px, 32px, 18px, 32px] gap-[10px] rounded-full font-semibold">
          Get Started
        </button>
      </div>
      <div className="h-[594px] w-[649px] gap-[24px] ml-[47px]">
  <div className="bg-white rounded-lg p-8 space-y-4">
    {/* Create Your Account Section */}
    <div className='w-full h-[154px] gap-[12px] border-b border-gray-300 p-0'>
      <h2 className="flex flex-row justify-between font-semibold text-[24px]">
        Create your account
        <img src={icon1} alt="" className='w-[24px] h-[24px] rounded-full bg-gray-100'/>
      </h2>
      <p className="mt-4 w-[443px] h-[78px] text-[18px] font-medium text-[#7E8492]">
        When registering, we will ask for your email address as well as creating a first cover letter. Your password will then be sent to you by email.
      </p>
    </div>

    {/* Remaining Items */}
    {["Impress Employers with AI", "Generate cover letter in seconds", "Job Applications Made Easy", "Unlimited downloads", "Unlimited cover letters"].map((item, index) => (
      <div key={index} className="flex justify-between items-center border-b border-gray-300 py-4">
        <h2 className="text-[24px] font-semibold">{item}</h2>
        <button className="text-gray-500">
          <img src={icon2} alt="" className='w-[24px] h-[24px] rounded-full bg-gray-100'/>
        </button>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default CoverAI;
