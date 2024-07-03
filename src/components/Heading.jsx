
import PropTypes from 'prop-types';

const Heading = ({buttonName,heading})=> {
    return (
        <div>
         <button className="btn btn-outline text-[#020043]"> {buttonName}</button>
         <h2 className="font-bold text-2xl my-4 text-[#020043]"> {heading} </h2>    
        </div>
    );
};

Heading.propTypes = {
    

    buttonName:PropTypes.string,
    heading:PropTypes.string
};

export default Heading;