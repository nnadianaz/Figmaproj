import logo from '../assets/logo.svg';
import visa from '../assets/visa.svg';
import icon1 from '../assets/footicon1.svg';
import icon2 from '../assets/footicon2.svg';
import icon3 from '../assets/footicon3.svg';

function Footer() {
  return (
    <footer className="bg-white text-sm w-full max-w-[1200px] h-auto mt-20 mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <a href=''>
            <img src={logo} alt="Logo" className="flex items-start w-[220.11px] h-[61.2px]" />
          </a>
          <p className="w-[283px] h-[48px] text-[16px] leading-[24px] mt-2 font-medium">
            Coveral.pro Barcelona is a brand of <br /> Eventos Singulares Kogarashi S.L
          </p>
          <nav className='w-full mt-4'>
            <ul className="flex flex-wrap gap-4 font-semibold">
              <li><a href="#" className="text-gray-500 hover:text-gray-950 text-[20px] leading-[24px]">Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-950 text-[20px] leading-[24px]">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-950 text-[20px] leading-[24px]">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-950 text-[20px] leading-[24px]">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-950 text-[20px] leading-[24px]">Cookies</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <p className='font-bold text-[20px] leading-[24px]'>Address</p>
          <div className='text-gray-500 text-[20px] leading-[24px] mt-2'>
            <p className='mt-4'>VAT-ESB16950552</p>
            <p className='mt-4'>Ronda Sant Pau 47</p>
            <p className='mt-4'>0B015 Barcelona Spain</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 border-t border-gray-400 pt-4"></div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-[56px] mt-4">
        <p className='text-gray-400 text-[16px] leading-[24px]'>&copy; 2024 Cover Al Copyrights All rights reserved.</p>
        <div className="flex space-x-2 mt-2 md:mt-0">
          <img src={visa} alt="Visa" className="h-[24px] w-auto" />
          <img src={icon1} alt="Payment Icon 1" className="h-[24px] w-auto" />
          <img src={icon2} alt="Payment Icon 2" className="h-[24px] w-auto" />
          <img src={icon3} alt="Payment Icon 3" className="h-[24px] w-auto" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;