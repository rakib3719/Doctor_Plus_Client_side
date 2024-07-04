import { MdArrowOutward } from "react-icons/md";
import aboutImg from '../assets/image/Rectangle 24.png'
import Heading from "./Heading";

const About = () => {
    return (
        <div className="bg-[#fbfbfb]">
            <div className="py-16 w-[94%] mx-auto md:w-[90%] max-w-[1160px] sm:p-8 rounded-lg">
            <div className="lg:flex gap-16 mt-28 items-center">
            <div className="aboutLeft flex-1 ">
              <Heading  buttonName={"Who We Are"} heading={"We Help To Get "}  heading2={"Soultions"} >


              </Heading>
                <p className="text-[#4D4C7B] sm:w-[100%] lg:w-[470px]">
                    We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="bg-[#FFC637] rounded-lg my-6 btn">
                    Learn more <MdArrowOutward className='text-xl' />
                </button>
            </div>

            <div className="aboutRight relative sm:flex lg:grid justify-center flex-1">
                <img src={aboutImg} alt="About" className="w-full lg:w-[500px]"/>
                <div className="bg-[#343268]  lg:w-[70%] text-white p-4 rounded-3xl absolute  w-[96%] sm:w-[50%] bottom-[-90px] sm:bottom-[-50px] sm:-left-4 left-0 md:-left-8 lg:-left-16 -lg:bottom-6 lg:translate-x-0">
                    <h1 className="font-bold text-2xl">Our mission is simple</h1>
                    <p className="text-[#FFFFFFCC]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default About;
