import About from "../components/About";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Service from "../components/Service";


const Main = () => {
    return (
        <div className="font-inter   w-[94%] md:w-[90%] max-w-[1160px] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Main;