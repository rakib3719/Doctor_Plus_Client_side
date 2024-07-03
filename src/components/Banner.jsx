import bannerImg from '../assets/image/Rectangle 5.png';

const Banner = () => {
    return (
        <div className='bg-gradient-to-b from-[#e0e0e7] to-[#fbfbfb] py-8'>
            <div className="relative w-[94%] mx-auto md:w-[90%] max-w-[1160px]">
                <img src={bannerImg} alt="Banner" className="w-full h-auto rounded-[50px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b rounded-[50px] from-[#00c19e87] via-[#020043] to-[#020043] opacity-40"></div>
            </div>
        </div>
    );
};

export default Banner;
