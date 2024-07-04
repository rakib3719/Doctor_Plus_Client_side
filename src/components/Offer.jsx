import { MdArrowOutward } from "react-icons/md";
import logo from '../assets/image/logo light.png'

const Offer = () => {
  return (
    <div className="bg-[#fbfbfb] py-28">
      <div className="w-[94%] mx-auto md:w-[90%] max-w-[1160px]">
        <div className="relative offerBg bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-start">
          
<img src={logo} alt="" className="absolute top-12 right-12" />

          <div className="relative z-10 py-16 pl-6 md:pl-16">
            <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl hidden sm:block">
              Get Your <br />
              First Appointment <br />
              at 50% Off!
            </h1>

            <h1 className="text-white mt-16 font-bold text-2xl  sm:hidden">
              Get Your 
              First Appointment <br />
              at 50% Off!
            </h1>
            <div className="sm:flex  gap-4 md:gap-8 items-center mt-6">
              <button className="bg-[#FFC637] mb-4 sm:mb-0 border-none btn flex items-center">
                Appointment <MdArrowOutward className="text-xl ml-2" />
              </button>
              <button className="btn btn-outline outline-[#020043] text-white flex items-center">
               Learn more <MdArrowOutward className="text-xl ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
