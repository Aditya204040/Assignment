import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import Button from "./button";
import polygon from "./imgs/Polygon.png";
import check from "./imgs/Check(2).jpg";
import vector from "./imgs/Vector.png";
import ellipse from "./imgs/Ellipse.jpg";
import bgImage from "./imgs/bun1.jpg";

const Drawer = ({ isOpen,DrawerHandler}) => {
  const Message='Go To Tracking Screen';

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000); // Delay in milliseconds

    return () => clearTimeout(timer);
  }, []);
  
  return ( 
    <div className={`fixed mx-auto inset-0 z-50 bg-center bg-no-repeat 
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    transition: 'opacity 0.3s ease-in-out' ,
    backgroundImage:`url(${bgImage})`}}>

    <div className={`fixed h-[32.25rem] bottom-0 left-0 right-0 opacity-1 p-4 transform transition-transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} style={{ transition: 'transform 0.3s ease-in-out' }}>

      <div className="bg-white lg:w-[23.1%] md:w-[100%] sm:w-[100%] rounded-t-[2.2rem] h-[100%] mx-auto flex-col my-4">

      <div className="w-[20.4rem] h-[1.5rem] mx-auto mb-2">
        <button onClick={DrawerHandler} className="-mt-1 p-2 rounded-xl ">
          <div className="w-[3.64rem] h-[0.25rem] bg-[#00000033] rounded-lg"></div>
        </button>
      </div>

      <div className="mt-8 mb-2 w-[100%]"> 
        <div className="w-[20.4rem] h-[10.5rem] mx-auto relative">
        <div className="w-[7.75rem] h-[7.75rem] mx-auto rounded-full relative top-8 z-0">
        <img src={ellipse} alt="circle" className=""></img>
        <img src={polygon} alt="poly" className="absolute top-3 left-3.5 z-10"></img>
        <img src={check} alt="check" className="bg-white object-cover mix-blend-multiply absolute top-12 left-11 z-20"></img>
        </div>
        <img src={vector} alt="vector" className={`absolute top-0 left-12 transition-opacity duration-1000 ease-in-out 
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}></img>
        </div>
      </div>

      <div className="mx-auto mb-6 w-[20.4rem] h-[2rem] font-semibold text-[24px]">Login Successfull
      </div>

      <div className="my-6">
      <NavLink to="/Track"><Button text={Message}/></NavLink>
      </div>

      <div className="w-[20.4rem] h-[1.25rem] mx-auto mt-4">
      <NavLink to="/login" onClick={DrawerHandler}><p className="text-[#878787] font-semibold">Logout</p></NavLink>
      </div>

      </div>

    </div>
  </div>
  );
};

export default Drawer;