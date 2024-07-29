
import Switch from "../Components/Switch"
import heart from '../assets/heart.svg';
import check from '../assets/check.svg';
import king from '../assets/king.svg';

export default function Getstartd() {
    
    return (
        <div className='bg-[#F8F8F8] w-full px-4 sm:px-6 lg:px-8'>
            <div className="flex flex-col items-center py-8">
                <div className='flex flex-col items-center justify-center text-center w-full max-w-3xl'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4'>
                        Get started with your plan now
                    </h1>
                    <p className='text-base sm:text-lg lg:text-xl font-medium mb-8'>
                        By signing up now, you will be able to gain access to our exclusive premium features, <br />
                        which are typically only available to paid users, without spending a single dime.
                    </p>
                </div>
                <div className='flex items-center justify-center font-semibold mb-8'>
                    <p className='text-base sm:text-lg lg:text-xl'>Monthly</p>
                    <Switch/>
                    <p className='text-base sm:text-lg lg:text-xl'>Yearly</p>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full w-28 h-10 text-base font-semibold mb-16 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
                    Save 75%
                </button>

                <div className='flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 w-full max-w-5xl'>
                    <div className="bg-white rounded-lg w-full max-w-sm p-6 border border-[#EDEDED]  hover:bg-purple-100 hover:shadow-lg hover:border-purple-300 transition duration-300">
                        <div className='text-start'>
                            <img src={heart} alt="Heart Icon" className='w-10 h-10 my-4' />
                            <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                            <p className="text-gray-600 mb-4 text-lg">Perfect to get started</p>
                            <div className="text-4xl font-bold mb-4">
                                0.50€
                                <span className="text-sm font-normal text-gray-600">/72 Hrs</span>
                            </div>
                        </div>
                        <div className='space-y-4 mb-8 '>
                            <p className='text-lg font-bold'>Starter included:</p>
                            <ul className="list-disc text-gray-600 space-y-2">
                                <li className='flex items-start'><img src={check} alt="Check Icon" className='mr-2' />72 Hr Service</li>
                                <li className='flex items-start'><img src={check} alt="Check Icon" className='mr-2' />Non-binding subscription</li>
                                <li className='flex items-start'><img src={check} alt="Check Icon" className='mr-2' />Cancel at any time</li>
                                <li className='flex items-start'><img src={check} alt="Check Icon" className='mr-2' />Refunded within 14 days</li>
                                <li className='flex items-start'><img src={check} alt="Check Icon" className='mr-2' />Unlimited email support</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className="bg-transparent border-gradient from-purple-500 to-blue-500 bg-[#F5F1FB] text-black font-bold w-44 h-14 border-2 rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
                                Get Starter Trial
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg w-full max-w-sm p-6 border border-[#EDEDED]  hover:bg-purple-100 hover:shadow-lg hover:border-purple-300 transition duration-300">
                        <div className='text-start'>
                            <img src={king} alt="King Icon" className='w-10 h-10 my-4' />
                            <h3 className="text-2xl font-semibold mb-2">Business</h3>
                            <p className="text-gray-600 mb-4 text-lg">Perfect to get started</p>
                            <div className="text-4xl font-bold mb-4">
                                14.90€
                                <span className="text-sm font-normal text-gray-600">/month</span>
                            </div>
                        </div>
                        <div className='space-y-4 mb-8'>
                            <p className='text-lg font-bold'>Business included:</p>
                            <ul className="list-disc text-gray-600 space-y-2">
                                <li className='flex items-start'><img src={check} alt="Check Icon" className='mr-2' />Non-binding subscription</li>
                                <li className='flex items-start'><img src={check} alt="Check Icon" className='mr-2' />All type of content</li>
                                <li className='flex items-start'><img src={check} alt="Check Icon" className='mr-2' />Cancel at any time</li>
                                <li className='flex items-start'><img src={check} alt="Check Icon" className='mr-2' />Refunded within 14 days</li>
                                <li className='flex items-start'><img src={check} alt="Check Icon" className='mr-2' />Unlimited email support</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className="bg-transparent border-gradient from-purple-500 to-blue-500 bg-[#F5F1FB] text-black font-bold w-44 h-14 border-2 rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
                                Get Business Trial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
