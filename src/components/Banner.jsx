
import bannerImg from '../assets/image/Rectangle 5.png';

const Banner = () => {
    return (
        <div className="relative mt-8">
            <img src={bannerImg} alt="Banner" className="w-full h-auto" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b rounded-[50px] from-[#00c19e87] via-[#020043] to-[#020043] opacity-40"></div>
        </div>
    );
};

export default Banner;
