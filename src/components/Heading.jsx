
import PropTypes from 'prop-types';

const Heading = ({buttonName,heading, heading2})=> {
    return (
        <div>
         <button className="btn rounded-full font-semibold btn-outline text-[#020043]"> {buttonName}</button>
         <h2 className="font-bold text-2xl sm:text-3xl my-4 text-[#020043]"> {heading} <br /> {heading2} </h2>  

        </div>
    );
};

Heading.propTypes = {
    

    buttonName:PropTypes.string,
    heading:PropTypes.string,
    heading2:PropTypes.string
};

export default Heading;