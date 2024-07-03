import { MdArrowOutward } from "react-icons/md";
import image1 from '../assets/image/Rectangle 27-2.png'
import image2 from '../assets/image/Rectangle 27-1.png'
import image3 from '../assets/image/Rectangle 27.png'


const Service = () => {
    const data = [
        {
          image: "https://i.ibb.co/2N5cYLP/Rectangle-27-2.png",
          title: 'Advanced Technology',
          shortDescription: 'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision'
        },
        {
          image: "https://i.ibb.co/m56y9Yj/Rectangle-27-1.png",
          title: 'Online Doctor Meet',
          shortDescription: 'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision'
        },
        {
          image: "https://i.ibb.co/NFXhqHz/Rectangle-27.png",
          title: 'Consultancy your health',
          shortDescription: 'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision'
        }
      ];
      
    return (
        <div className="mt-28">
            <div  className="grid md:grid-cols-2 gap-8">

            <div className=" ">
                <button className="btn btn-outline text-[#020043]"> Who We Are </button>
                <h2 className="font-bold text-2xl my-4 text-[#020043]">Empowering Health, <br />Enriching Lives </h2>
                <p className="text-[#4D4C7B] sm:w-[100%] lg:w-[470px]">
                    We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="bg-[#FFC637] rounded-lg my-6 btn">
                Appointment <MdArrowOutward className='text-xl' />
                </button>
            </div>

{

    data.map((data, idx)=> 
    
    <div key={idx}>

<img src={data.image} alt="" />
<div className="bg-[#020043]">
<h1>{data.title}</h1>
<p>   {data.shortDescription} </p>

</div>


    </div>)
}
            
            </div>
        </div>
    );
};

export default Service;