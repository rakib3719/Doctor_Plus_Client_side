import { MdArrowOutward } from "react-icons/md";
import aboutImg from '../'


const About = () => {
    return (
        <div className="md:flex mt-28">
            <div className="aboutLeft flex-1">


<button className="btn btn-outline text-[#020043]"> Who We Are  </button>
<h2 className="font-bold text-2xl my-4 text-[#020043]" >We Help To Get <br /> Soultions</h2>

<p className="text-[#4D4C7B]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>

<button className="bg-[#FFC637] rounded-lg my-6 btn">Learn more <MdArrowOutward  className='text-xl'/></button>

            </div>






            <div className="aboutRight flex-1">

<img src="" alt="" />

            </div>
        </div>
    );
};

export default About;