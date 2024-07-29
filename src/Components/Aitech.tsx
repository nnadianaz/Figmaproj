import men from '../assets/men.svg';
import overlayImage1 from '../assets/aibot.svg'; 
import overlayImage2 from '../assets/customdata.svg'; 

function Aitech() {
  return (
    <>
    <div className=' bg-[#F8F8F8]'>
    <div className="h-[817px] w-[1200px] mt-48">
      <div className='flex flex-col md:flex-row md:items-stretch'>
        <div className="flex flex-col items-start mt-10 w-full md:w-1/2 ml-[80px]">
          <h1 className="w-[165px] h-[29px] font-bold text-[24px] leading-[28.8px] text-gradient">AI Technology</h1>
          <h2 className="w-[620px] h[231px] text-[64px] leading-[76.8px] mt-4 font-semibold">Edit and customize your cover letter with ease</h2>
          
          <div className="flex flex-row items-center justify-center w-[483px] h-[62px] gap-[25px]">
            <button className="bg-transparent border border-gradient from-purple-500 to-blue-500 bg-[#F5F1FB] text-black font-bold w-[131px] h-[62px] rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
              Data Entry
            </button>
            <button className="bg-transparent border border-gradient from-purple-500 to-blue-500 bg-[#F5F1FB] text-black font-bold w-[196px] h-[62px] rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
              General Manager
            </button>
            <button className="bg-transparent border border-gradient from-purple-500 to-blue-500 bg-[#F5F1FB] text-black font-bold w-[106px] p-[16px] gap-[10px] h-[62px] rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
              Fashion
            </button>
            </div>
            <div className='flex flex-row items-center justify-center mt-4 w-[419px] h-[62px] gap-[24px]'>
            <button className=" bg-transparent border border-gradient from-purple-500 to-blue-500 bg-[#F5F1FB] text-black font-bold w-[118px] p-[16px] text-sm gap-[10px] h-[62px] rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
              Sales Agent
            </button>
            <button className=" bg-transparent border border-gradient from-purple-500 to-blue-500 bg-[#F5F1FB] text-black font-bold w-[145px] h-[62px] p-[16px] gap-[10px] rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
              Teacher
            </button>
            <button className=" bg-transparent border border-gradient from-purple-500 to-blue-500 bg-[#F5F1FB] text-black font-bold w-[108px] h-[62px] p-[16px] gap-[10px] rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
              Marketer
            </button>
          </div>

          <p className="text-purple-500 w-[387px] h-[81px] text-[18px] leading-[27px] mt-10">
            Preview your cover letter in real-time to see <br /> how it will appear to recruiters before <br /> finalizing and
            submitting your application.
          </p>
        </div>

        <div className="relative mt-10 flex flex-col items-start w-[588px] h-[509px] md:w-1/2">
          <img
            src={men}
            alt="Man reading a document"
            className=" w-[588px] h-[509px]  rounded-lg"/>
          
          
            {/* Overlay Images */}
          <img
            src={overlayImage1}
            alt="Overlay Image 1"
            className="absolute mt-[25px] ml-[30px] p-[8px, 16px, 8px, 16px] gap-[8px] h-[40px]"
          />
          <img
            src={overlayImage2}
            alt="Overlay Image 2"
            className="absolute mt-[25px] ml-[150px] p-[8px, 16px, 8px, 16px] gap-[8px] h-[40px] w-[165]"
          />
            
          
          <p className="text-purple-700 mt-10 w-[512px] h-[81px] text-[18px] ml-20">
            Leverage artificial intelligence to analyze job descriptions <br /> and provide personalized recommendations
            for crafting <br /> compelling cover letters.
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Aitech;