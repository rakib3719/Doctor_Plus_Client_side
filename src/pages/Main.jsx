import About from "../components/About";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import Service from "../components/Service";
import Testomonial from "../components/Testomonial";


const Main = () => {
    return (
        <div className="font-inter  mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Feature></Feature>
            
            <About></About>
            <Service></Service>
            <Testomonial></Testomonial>
            <Faq></Faq>
            <Offer></Offer>
            <Footer></Footer>
        </div>
    );
};

export default Main;