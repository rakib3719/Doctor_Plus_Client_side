import About from "../components/About";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div className="font-inter    max-w-[1160px] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Main;