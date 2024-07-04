import contract from '../assets/image/contract (1) 1.png'
import coin from '../assets/image/Group (1).png'
import chart from '../assets/image/Group 12 (1).png'
import video from '../assets/image/Group (3).png'
import { FaStar } from 'react-icons/fa'
import users from '../assets/image/Group 7.png'

const Feature = () => {
    return (
        <div className="bg-[#fbfbfb] pt-4 md:pt-8">
            <h1  className="font-bold text-3xl text-center  lg:hidden pb-4">   Comprehensive Care <br /> for Every Patient</h1>
            <div className=" w-[94%] mx-auto items-end gap-6  grid lg:grid-cols-5 md:w-[90%] justify-center  max-w-[1160px]">
          
<div className='mx-auto flex justify-center '>

<div className='sm:flex  lg:flex-col gap-4 mx-auto'>
<div className="card flex-1 mb-8 sm:mb-0  border bg-white  h-[312px]">
  <div className="card-body">
    <h2 className="card-title"> 90%</h2>
    <p>Patient satisfaction rate, reflecting our commitment.</p>
    <div className="mt-4 ml-8">
     <img src={chart} alt="" className='w-[100px]'/>
    </div>
  </div>
</div>

<div className="card flex-1 border bg-white h-[312px] lg:hidden">
  <div className="card-body">
    <h2 className="card-title"> 50+</h2>
    <p>Free lession video for patient</p>
    <div className="">
     <img src={video} alt="" className='w-[100px]'/>
    </div>
  </div>
</div>
</div>

</div>
<div  className="col-span-3">

<h1  className="font-bold text-3xl text-center hidden lg:block pb-4">   Comprehensive Care <br /> for Every Patient</h1>
<div>
<div className='sm:flex gap-4 space-y-4 sm:space-y-0 items-end'>
<div className="card border bg-white h-[220px]">
  <div className="card-body">
    <h2 className="card-title"> 500+</h2>
    <p>Money spend for poor patient</p>
    <div className="card-actions justify-end">
     <img src={contract} alt="" />
    </div>
  </div>
</div>


<div className="card border bg-white h-[190px]">
  <div className="card-body">
    <h2 className="card-title flex items-center"> 4.8   <FaStar className='text-[#FFE03D] text-3xl'></FaStar> </h2>

    <p>Over 20,000 Patient</p>
    <img src={users} alt="" />
    
  </div>
</div>
<div className="card border bg-white h-[220px]">
  <div className="card-body">
    <h2 className="card-title">$5000</h2>
    <p>Board-certified doctors</p>
    <div className="card-actions justify-end">
     <img src={coin} alt="" />
    </div>
  </div>
</div>
</div>


</div>
</div>

<div>

<div className="card border bg-white h-[290px] hidden lg:block">
  <div className="card-body">
    <h2 className="card-title"> 50+</h2>
    <p className=''>Free lession video for patient</p>
    <div className="mt-8 ">
     <img src={video} alt="" className='w-[100px]'/>
    </div>
  </div>
</div>

</div>
            </div>
        </div>
    );
};

export default Feature;