import { NavLink } from "react-router-dom";
import bun1 from "./imgs/bun1.jpg";
import bun2 from "./imgs/bun2.jpg";
import bun3 from "./imgs/bun3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import './styles/circularMotion.css';

function OnboardDetailsCard(){
    //BG Images
    const images = {
        first:bun1,
        second:bun2,
        third:bun3,
    }

    //hooks
    const[pageCount1,setPageCount1] = useState(true);
    const[pageCount2,setPageCount2] = useState(false);
    const[pageCount3,setPageCount3] = useState(false);

    const[bgImage,setBgImage] = useState(images.first);


    function handleClick(){
        if(pageCount1){
            setPageCount2(true);
            setPageCount1(false);
            setBgImage(images.second);
        }
        else if(pageCount2){
            setPageCount3(true);
            setPageCount2(false);
            setBgImage(images.third);
        }
    }


    const details = {
        header:{
            data:'We serve incomparable delicacies',
        },
        para:{
            data:'All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!',
        }
    }
    return (
        <div className='h-[100vh] w-[100%] flex justify-center items-center bg-center bg-no-repeat' style={{backgroundImage:`url(${bgImage})`}}>
        <div className="bg-[#FE8C00] max-w-[19.4rem] max-h-[25rem] flex-col items-between m-10 absolute bottom-0 border-none rounded-[3.1rem] text-white">
            <div className="my-8">
            <div className="flex-col justify-center items-center">
            <h4 className="text-[2rem] leading-[2.5rem] m-2 font-semibold">{details.header.data}</h4>
            <p className="m-2 text-[0.87rem] leading-[1.25rem] mx-[1.5rem] max-w-[15.68rem]">{details.para.data}</p>
            </div>
            <div className="flex justify-center items-center pl-0 mt-3">
                <div className="w-[5rem] h-[0.43rem] flex justify-between">
                <div className={`rounded-lg w-[1.5rem] h-[0.37rem] inline-block 
                ${pageCount1===true ? 'bg-white' : 'bg-[#C2C2C2]'}`} 
                style={{ transition: 'transform 0.3s ease-in-out' } }></div>

                <div className={`rounded-lg w-[1.5rem] h-[0.37rem] inline-block  
                ${pageCount2===true ? 'bg-white' : 'bg-[#C2C2C2]'}`} 
                style={{ transition: 'transform 0.3s ease-in-out' }}></div>

                <div className={`rounded-lg w-[1.5rem] h-[0.37rem] inline-block 
                ${pageCount3===true ? 'bg-white' : 'bg-[#C2C2C2]'}`} 
                style={{ transition: 'transform 0.3s ease-in-out' }}></div> 
                </div>
            </div>

            {pageCount3!==true ? 
            <div className=" flex justify-between m-6 ml-7 mt-24 items-center">
                <NavLink to="/Login" style={{ transition: 'transform 0.3s ease-in-out' }}>
                <span className="font-semibold">Skip</span></NavLink>
                <NavLink to="/" onClick={handleClick} style={{ transition: 'transform 0.3s ease-in-out' }}>
                <div className="flex items-center font-semibold m-1">Next<span className="p-1"></span>
                <FaArrowRightLong /></div></NavLink>   
            </div> 

            : <div className="flex justify-center items-center m-4 mt-6"> 
            <NavLink to="/Login">
            <div className=" bg-[#FE8C00] h-[5.87rem] w-[5.87rem] border-4 border-[#C2C2C2] rounded-full flex justify-center items-center relative">
            <div className=" bg-transparent flex w-full h-full rounded-full absolute top-0"><div className="circle w-[100%] h-[100%] bg-white"></div></div>
            <BsArrowRight style={{ color: '#FE8C00'}} size={'60px'} className="bg-white font-bold p-[1.25rem] rounded-full"/>
            </div>
            </NavLink>

            </div>}
            </div>
        </div></div>
    );
};
export default OnboardDetailsCard;