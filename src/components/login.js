import { NavLink } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { useState } from "react";
import Button from './button';
import OtherSignIn from "./OtherSignIn";
import Drawer from "./LoginSuccess";
import { toast } from "react-toastify";
import { useSelector,useDispatch } from 'react-redux';
import { login } from "./store/actions";

function Login(){
    const[showPassword,setShowPassword]=useState(false);
    const[passwordInputType,setPasswordInputType] = useState('password');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    
    const [Data, setData] = useState({
        Email:'',
        Password:'',
    });

    function handleInputs(e){
        const { name, value, type, checked } = e.target;
        setData({
          ...Data,
          [name]: type === 'checkbox' ? checked : value,
        });
    }

    function handleSignIn(e){
        e.preventDefault();
            if(Data.Email!=='' && Data.Password!==''){
                const user = users.find(
                    (user) => user.Email === Data.Email && user.Password === Data.Password
                );
                if (user) {
                    dispatch(login(user));
                } else {
                    return toast.error("User Not Found Please Use Register Button",{
                        position: "top-center",
                        autoClose: 1000 
                    }
                )
                }
            setData('','');
            DrawerHandler();
            return true;
        }
        else{
            toast.error("All Feilds Are Required!",{
                    position: "top-center",
                    autoClose: 1000 
                }
            )
        }
        
    }

    function DrawerHandler(){
        setIsDrawerOpen(!isDrawerOpen);
    }

    function clickHandler(){
        setShowPassword(!showPassword);
        if(showPassword===true){
            setPasswordInputType('password');
        }
        else{
            setPasswordInputType('text'); 
        }
    }

    return(
    <div className="container flex justify-center mx-auto overflow-hidden">
    <div className="w-[23.4rem] h-[50.75rem] flex-col justify-between">
        <div className="w-[20.4rem] h-[6.75] m-10 mb-6 text-left">
        <h1 className="text-[2.18rem] font-semibold">Login to your account.</h1>
        <p className="text-[#878787]">Please sign in to your account </p>
        </div>
        <form className="m-10 text-left">
            <div className="w-[20.4rem] h-[5rem]">
            <label htmlFor="Email"  className="h-[30%] md-3">Email Address</label><br/>
            <input type="email" id="Email"
            name="Email"
            value={Data.Name} 
            onChange={handleInputs} 
            placeholder="Email" 
            className="w-[20.4rem] h-[60%] border-[#EDEDED] border-2 rounded-lg p-4"
            required></input>
            </div>

            <div className="w-[20.4rem] h-[5rem] mb-9">
            <label htmlFor="Password" className="h-[30%] md-3">Password</label><br/>
            
            <div className="relative inline-block">
            <input type={passwordInputType} id="Password"
            name="Password"
            value={Data.Password} 
            onChange={handleInputs}
            placeholder="Password" 
            className="w-[20.4rem] h-[60%] border-[#EDEDED] border-2 rounded-lg p-4" 
            required> 
            </input>
            <div className="absolute bottom-5 right-6 z-10">
            <NavLink onClick={clickHandler}>{ showPassword ? <HiOutlineEye/> : <HiOutlineEyeSlash /> }
            </NavLink>
            </div>
            </div>
            <br/>
            <div className="text-right p-1 font-semibold mt-4">
            <label className="text-[#FE8C00] hover:cursor-pointer hover:underline">Forgot Password?</label> 
            </div>
            </div>
            <br/>
            <div><NavLink onClick={handleSignIn}><Button text='Sign in' style={{ transition: 'transform 0.3s ease-in-out' }}></Button></NavLink></div>
        </form>

        <OtherSignIn></OtherSignIn>

        <div className="flex justify-center ml-8">
        <p className="font-medium">don't have a account?
        <span>
        <NavLink to="/signup" style={{ transition: 'transform 0.3s ease-in-out' }}>&nbsp;
        <span className="text-[#FE8C00] hover:underline">Register
        </span>
        </NavLink>
        </span></p></div>
    </div> 
    <Drawer isOpen={isDrawerOpen} DrawerHandler={DrawerHandler}/>
    </div>
    );
}

export default Login;