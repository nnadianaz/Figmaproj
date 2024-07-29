

import men1 from '../assets/men1.svg';
import women from '../assets/women1.svg';
import men2 from '../assets/men2.svg';
import stars from '../assets/Star5.svg';
import imgbox from '../assets/Iconbox.svg';
import imgbox2 from '../assets/card2.svg';
import imgbox3 from '../assets/card4.svg';
import img8 from '../assets/Group.svg'

export default function Boost() {
    return (
        <div className=" flex flex-col md:flex-row h-[1086px] w-[1200px] mt-10">
            <div className="flex flex-col items-start md:w-1/2 ml-[80px] w-[639px] h-[500px] gap-[56px]">
                <h1 className="text-[64px] font-semibold w-[630px] h-[249px] gap-[16px]">Boost Your <br />Application With <br /> CoverAi</h1>
                <h3 className="font-bold w-[551px] h-[30px] text-[24px] leading-[30px]">Unveiling AI Creativity To Empower You</h3>
                <p className="text-purple-500 mt-4 w-[495px] h-[54px] text-[18px] leading-[27px]">Enjoy a user friendly interface that makes crafting <br /> professional cover letters quick, easy, and hassle-free.</p>
                <div className="flex flex-row ">
        <button className="flex flex-row items-center justify-center mt-4 w-[161px] h-[55px] font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[16px] rounded-full p-[18px, 32px, 18px, 32px] hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">GET STARTED</button>
        <div className="relative flex flex-row items-center justify-center w-[210px] h-[40px] mt-[25px] ml-4">
  <img src={men1} alt="group" className="w-[40px] h-[40px] rounded-full border border-gray-300" />
  <img src={women} alt="image" className="w-[40px] h-[40px] rounded-full border border-gray-300 ml-[-10px]" />
  <img src={men2} alt="image1" className="w-[40px] h-[40px] rounded-full border border-gray-300 ml-[-10px]" />
  <img src={stars} alt="image1" className="w-32"/>
  

</div>
        </div>
            </div>

            <div className="md:w-1/2 container mx-auto px-4 py-16 cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white mt-40 w-[283px] h-[322px] rounded-lg shadow-md p-[24px] gap-[24px] border-[1px] border-rounded-sm text-center hover:bg-purple-100 hover:shadow-lg hover:border-purple-300 transition duration-300">
                        <div className="flex items-center justify-center w-[70px] h-[70px] padding-[20px] gap-[10px] mb-4 rounded-full bg-gray-200">
                            <img src={imgbox} alt="" />
                        </div>
                        <h3 className="text-[24px] leading-[34px] font-bold mb-2">Subscription offer</h3>
                        <p className=" text-gray-600 text-[16px] leading-[26px] ">Our service works with a monthly subscription at 14,99 € with no time commitment. You have the option to terminate your subscription</p>
                    </div>

                    <div className="bg-white mt-20 w-[283px] h-[322px] ml-[50px] rounded-lg shadow-md p-[24px] gap-[24px] border-[1px] border-gray-200 text-center hover:bg-purple-100 hover:shadow-lg hover:border-purple-300 transition duration-300">
                        <div className="flex items-center justify-center w-[70px] h-[70px] p-[20px] gap-[10px] mb-4 rounded-full bg-gray-200">
                            <img src={imgbox2} alt="Icon" />
                        </div>
                            <h3 className=" text-[24px] leading-[34px] font-bold mb-2">Secure payment</h3>
                            <p className="text-gray-600 text-[16px] leading-[26px]">All transactions made on our site are secured by one of the leaders in online payment. All your personal information is encrypted using SSL protocol.</p>
                        </div>


                    <div className="bg-white w-[283px] h-[322px] rounded-lg shadow-md p-[24px] gap-[24px] border-[1px] border-rounded-sm text-center hover:bg-purple-100 hover:shadow-lg hover:border-purple-300 transition duration-300">
                        <div className="flex items-center justify-center w-[70px] h-[70px] padding-[20px] gap-[10px] mb-4 rounded-full bg-gray-200">
                        <img src={imgbox2} alt="" />
                        </div>
                        <h3 className="text-[24px] leading-[34px] font-bold mb-2">Invoices and receipts</h3>
                        <p className=" text-gray-600 text-[16px] leading-[26px]">If you need an invoice, please send us an email to info@coverai.pro and our finance department will send</p>
                    </div>

                    <div className="bg-white absolute ml-[310px] mt-[430px] w-[283px] h-[322px] rounded-lg shadow-md p-[24px] gap-[24px] border-[1px] border-rounded-sm text-center hover:bg-purple-100 hover:shadow-lg hover:border-purple-300 transition duration-300">
                        <div className="flex items-center justify-center w-[70px] h-[70px] padding-[20px] gap-[10px] mb-4 rounded-full bg-gray-200">
                        <img src={imgbox3} alt="" />
                        </div>
                        <h3 className="text-[24px] leading-[34px] font-bold mb-2">Easy To Use</h3>
                        <p className=" text-gray-600 text-[16px] leading-[26px]">Select a type of copy. Choose from headlines, blog intros. Job description, and much more. Then get started with your cover letter.</p>
                    </div>
                    
                </div>
            </div>
            <img src={img8} alt="" className="absolute mt-[800px] h-[538.9px]" />
        </div>
    )
}