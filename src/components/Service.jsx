import { MdArrowOutward } from "react-icons/md";
import Heading from "./Heading";



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

        <div  className="bg-[#fbfbfb] pt-44">

<div className=" sm:bg-[#FFFFF5] w-[94%] mx-auto md:w-[90%] max-w-[1160px] sm:p-12 rounded-[32px]">
            <div  className="grid  lg:grid-cols-2 gap-8">

            <div className="">
                <Heading   buttonName={"Service"} heading={"Empowering Health, "} heading2={"Enriching Lives"} ></Heading>
                <p className="text-[#4D4C7B] sm:w-[100%] lg:w-[470px]">
                We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                </p>
                <button className="bg-[#FFC637] border-none rounded-lg my-6 btn">
                Appointment <MdArrowOutward className='text-xl' />
                </button>
            </div>

{

    data.map((data, idx)=> 
    
    <div key={idx} className="relative sm:flex justify-center">

<img  src={data.image} alt="" className="w-[524px] rounded-3xl h-[394px]" />
<div className="bg-[#02004399] absolute w-[86%] left-2 sm:left-[100px]  md:left-[200px] lg:left-[40px] bottom-[20px] text-white py-4 px-2 rounded-2xl sm:w-[320px] flex justify-between">
<div className="">
<h1   className="font-bold text-2xl text-[#FFFFF5E6]">{data.title}</h1>
<p   className="text-[#FFFFF5E6]">   {data.shortDescription} </p>
</div>

<div className="flex justify-end items-end w-[48px]">
<MdArrowOutward  className='text-[48px] bg-[#FFC637] p-4 rounded-full '/>


</div>

</div>


    </div>)
}
            
            </div>
        </div>
        </div>

       
    );
};

export default Service;