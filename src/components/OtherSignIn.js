import { NavLink } from "react-router-dom";
import Icon from './imgs/Icon.jpg';

function OtherSignIn(){
    return(
        <div className="flex-col justify-center items-center">
            <div className="w-[100%] ml-4 my-6 flex gap-1 justify-center items-center font-medium">
            <div className="bg-[#878787] w-[6.21rem] h-[0.031rem]"></div>
            <div className="w-[6rem] h-[1.25rem] text-[#878787] text-[0.87rem] leading-tight">Or Sign In With</div>
            <div className="bg-[#878787] w-[99.5px] h-[0.5px]"></div>
            </div>
            <div className="my-8 mx-auto flex justify-center items-center w-[20.4rem]">
            <div className="border-2 border-[#8787875f] h-[2.5rem] rounded-3xl overflow-hidden p-1">
            <NavLink to="/googleAuth"><img src={Icon} alt="img" className="w-[1.87rem] "></img></NavLink>
            </div>
            </div>
        </div>
    )
}

export default OtherSignIn;