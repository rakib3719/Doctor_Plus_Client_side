import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../assets/image/logo light.png'
const Footer = () => {

    return (
        <div className="bg-[#020043] py-16 ">
            <footer className="   w-[94%] mx-auto md:w-[90%] max-w-[1160px] footer text-gray-400">
                 
<div  className='flex flex-col '>

<img src={logo} alt="" className='mb-8' />
  <nav className='text-gray-400'>


    123 Main Street Anytown, USA <br />
    Postal Code: 12345 <br /> <br />

Support: support@oyolloo.com <br />
(Available : 10:00am to 07:00pm)
  </nav>
</div>
  <nav  className='md:mt-14'>
    <h6 className="footer-title"></h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Success Page    </a>
    <a className="link link-hover">Terms and condition</a>
  </nav>
  <nav  className='md:mt-14'>
    <h6 className="footer-title"></h6>
    <a className="link link-hover">Services</a>
    <a className="link link-hover">Scheduling</a>
    <a className="link link-hover">Contact Us   </a>
    <a className="link link-hover">Patient Portal</a>
  </nav>
  <div className='md:mt-14'>
    <h6 className="footer-title">Follow Us</h6>
    <div className='flex gap-4'>

        <FaFacebook  className='text-[24px]'></FaFacebook>
        <FaInstagram  className='text-[24px]'></FaInstagram>
        <FaLinkedin  className='text-[24px]'></FaLinkedin>
        <FaYoutube  className='text-[24px]'></FaYoutube>
    </div>
    <p className='mt-10 text-[#8685a0]'>@docplus 2024</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;