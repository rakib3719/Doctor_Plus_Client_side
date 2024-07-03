import { MdArrowOutward } from 'react-icons/md';
import logo from '../assets/image/logo dark.png'

const Navbar = () => {

const nav = <>

<li><a>Home</a></li>
<li><a>Service</a></li>
<li><a>Blog</a></li>
<li><a>About Us</a></li>
</>

    return (
        <div className='bg-[#e0e0e7] '>
            <div className="navbar m ">
  <div className="navbar-start mt-4">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#020043]">
        {nav}
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">

<img src={logo} alt="" />

    </a>
  </div>
  <div className="navbar-center hidden mt-4 lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#020043]">
    {nav}
    </ul>
  </div>
  <div className="navbar-end mt-4">
    <a className="btn btn-outline  outline-[#020043] text-[#020043]">Appointment   <MdArrowOutward  className='text-xl'/></a>
  </div>
</div>
        </div>
    );
};

export default Navbar;