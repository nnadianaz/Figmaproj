import baseimg from "../assets/BaseImage.svg"
import group from '../assets/flag1.svg'
import image from '../assets/flag2.svg'
import image1 from '../assets/flag3.svg'
import img from '../assets/43.svg'
import img2 from '../assets/40.svg'
import img3 from '../assets/41.svg'
import img4 from '../assets/44.svg'
import img5 from '../assets/_Avatar.svg'
import { FaArrowRight } from "react-icons/fa6"
import overlaySvg from '../assets/mobiledata.svg';
import img8 from '../assets/Group.svg'
import img9 from '../assets/Group2 (1).svg'
import img10 from '../assets/Group2 (2).svg'
import leftBottomImage from '../assets/bluearrow.svg'
import arrow1 from '../assets/arrow1.svg'
import rectangle from '../assets/Rectangle.svg'
import img45 from '../assets/45.svg'
import audio from '../assets/Audio.svg'


export default function Reimaging() {

     

    // Split the text into three parts
    
    return (
        <div className=" flex flex-row relative">
      <div className=" py-8">
        <div className="flex flex-row mt-20 ">
            <p className="mr-4 text-[24px] ml-[80px] font-medium text-[background: #1E2238;
]">Available in: </p>
            <img src={group} alt="group" className="mr-2 mt-2 w-[28px] h-[21px]"/>
            <img src={image} alt="image" className="mr-2 mt-2 w-[28px] h-[21px]"/>
            <img src={image1} alt="image1" className="mr-2 mt-2 w-[28px] h-[21px]"/>
            <button className=" bg-[#ffffff] text-[10px] text-black border-[1px] border-[#E2E8F0] rounded-full p-[8px] w-[73px] h-[34px] ">+20 more</button>
        </div>
        <div className="w-[648px] h-[182px] ml-[80px]">
        <p className=" text-[80px] font-medium">Reimaging the <span className="text-[#8064F8] text-[80px]">Cover</span> Letter</p>
        </div>
        <p className="mt-4 ml-20 text-gray-600 flex items-start justify-center">

          <div className="flex flex-row items-start mt-[70px] ml-[150px] w-[552px] h-[81px]">
          <img src={arrow1} alt="" className="mr-2 mt-2" />
          <p className="w-[487px] h-[81px font-medium text-[18px] leading-[27px]">Our revolutionary platform generates unique and impactful cover letters that grab, attention and set you apart from the competition.</p>
          </div>
      
    </p>
        <div className="flex flex-row mt-8">
        <a href="/get-demo">
              <button className="flex flex-row items-center justify-center mt-4 text-[12px] w-[186px] h-[52px] ml-[229px] bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full px-10 py-4 cursor-pointer hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
              LEARN MORE <FaArrowRight className="ml-2" />
              </button>
            </a>
        {/* <a href="/">
        <button className="flex flex-row items-center justify-center mt-4 text-[12px] w-[186px] h-[52px] ml-[229px] bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full px-10 py-4 cursor-pointer hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">LEARN MORE <FaArrowRight className="ml-2" /></button>
        </a> */}
        <div className="relative flex flex-row items-center justify-center w-[210px] h-[40px] mt-[25px]">
  <img src={img} alt="" className="w-[40px] h-[40px] rounded-full border border-gray-300" />
  <img src={img2} alt="" className="w-[40px] h-[40px] rounded-full border border-gray-300 ml-[-10px]" />
  <img src={img3} alt="" className="w-[40px] h-[40px] rounded-full border border-gray-300 ml-[-10px]" />
  <img src={img4} alt="" className="w-[40px] h-[40px] rounded-full border border-gray-300 ml-[-10px]" />
  <img src={img5} alt="" className="w-[40px] h-[40px] rounded-full border border-gray-300 ml-[-10px] bg-white flex items-center justify-center" />

</div>
      {/* ellipse images */}
      
        <img src={img8} alt="" className="absolute " />
        <img src={img9} alt="" className="absolute ml-[1100px]" />
        <img src={img10} alt="" className="absolute ml-[1000px]" />
        
        </div>
    
        <div className="relative bg-cover bg-center ">

  <div className="relative">
      <img src={rectangle} alt="" className="absolute mt-32 ml-[275px] " />
      <div className="absolute top-[142px] ml-[390px] transform -translate-x-1/2 flex space-x-4">
        <img src={img45} alt="" className="w-[31.93px] h-[31.93px]" />
        <img src={audio} alt="" className="w-[160.34px] h-[27.76px]" />
      </div>
    </div>

</div>

      </div>

      <div className="absolute">
      <div className="">
        <img src={baseimg} alt="Mobile Mockup" className="w-[853px] h-[1195] mt-[-125px] ml-[600px]" />
        <img 
          src={overlaySvg} 
          alt="Overlay SVG" 
          className="absolute top-[120px] ml-[905.03px] w-[315.85px] h-[630.68px] object-cover"
        />
        <img
          src={leftBottomImage}
          alt="Left Bottom Image"
          className="absolute left-[-50px] bottom-[-4px] w-[130px] h-[130px] ml-[580px] object-cover"
        /> 
      </div>
       <div className="absolute bottom-0 left-10 right-0 text-center text-sm text-gray-500">
      
      </div>
    </div>
    
      </div>
    );
  }