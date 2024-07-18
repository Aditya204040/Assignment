import { NavLink } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { useState } from "react";
import { toast } from "react-toastify";
import Button from './button';
import OtherSignIn from "./OtherSignIn";
import { useDispatch , useSelector } from 'react-redux';
import { signup } from './store/actions';

function Signup(){
    const[showPassword,setShowPassword] = useState(false);
    const[passwordInputType,setPasswordInputType] = useState('password');
    const[checked,setChecked] = useState(true);
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    

    const [userData, setUserData] = useState({
        Email:'',
        Name:'',
        Password:'',
        Terms:false,
    });

    //To Handle Inputs and Storing them is state variable
    function handleInputs(e){
        const { name, value, type, checked } = e.target;
        setUserData({
          ...userData,
          [name]: type === 'checkbox' ? checked : value,
        });
    }

    const validEmailForm = (email) => {
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return valid.test(String(email).toLowerCase());
    };

    const vaildateEmail = (Email)=>{
        if (validEmailForm(Email)) {
            return true;
        } else {
              toast.error("Please Enter a Valid Email",{
                  position: "top-center",
                  autoClose: 1000 
              })
              return false;
        }
    }

    function validateUserName(userName){
        const userExists = users.find((user) => user.username === userName);
        if (userExists) {
            toast.warn("UserName already exists! use another",{
                position: "top-center",
                autoClose: 1000 
            })
        } else {
            return true;
        }
  }
    //To Handle the Password Show button
    function PasswordShowHandler(){
        setShowPassword(!showPassword);
        if(showPassword===true){
            setPasswordInputType('password');
        }
        else{
            setPasswordInputType('text'); 
        }
    }

    //To handle Final Register and Saving Data to store
    function handleRegister(e){
        console.log(userData);
        if(userData.Email!=='' && userData.Password!=='' && userData.Name!=='' && userData.Terms!==false){
            //Validation
            if(vaildateEmail(userData.Email) && validateUserName(userData.Name)){
                if(userData.Password.length < 8){
                    toast.warn("Password should have 8 or more words",{
                        position: "top-center",
                        autoClose: 2000 
                    })
                    return false;
                }else{
                    dispatch(signup(userData));
                    toast.success("Signed In Successfully", {
                    position: "top-center",
                    autoClose: 2000 
                });
                setUserData('','','',false);
                return true;
                }
            }
            
        }
        else{
            toast.error("All Feilds Are Required!",{
                    position: "top-center",
                    autoClose: 2000 
                }
            )
        }
        
    }

    return(
    <div className="container w-[100%] flex justify-center mx-auto text-inter">

        <div className="w-[23.4rem] h-[50.75] flex-col justify-center items-center">
        <div className="w-[20.4rem] h-[6.75rem] m-10 text-left">
        <h1 className="text-[2.18rem] font-semibold">Create your new account.</h1>
        <p className="text-[#878787]">Create an account to start looking for the food you like </p>
        </div>
        <form className="m-10 mr-6 text-left mt-14">

            <div className="w-[20.4rem] h-[5rem] mb-2">

                <label htmlFor="Email"  className="h-[30%]">Email Address</label><br/>

                <input type="email" id="Email" 
                name="Email"
                placeholder="Email"
                value={userData.Email}
                onChange={handleInputs}
                className="w-[20.4rem] h-[60%] border-[#EDEDED] border-2 rounded-lg p-4">
                </input>

            </div>

            <div className="w-[20.4rem] h-[5rem] mb-2">

                <label htmlFor="username" 
                className="h-[30%] md-3">User Name</label><br/>

                <input type="text" id="username" 
                name="Name"
                placeholder="username"
                value={userData.Name}
                onChange={handleInputs}
                className="w-[20.4rem] h-[60%] border-[#EDEDED] border-2 rounded-lg p-4"></input>

            </div>

            <div className="w-[20.4rem] h-[5rem] mb-4">

                <label htmlFor="Password" className="h-[30%] md-3">Password</label>
                <br/>
                <div className="relative inline-block">
                <input type={passwordInputType} id="Password" 
                name="Password"
                value={userData.Password}
                onChange={handleInputs}
                className="w-[20.4rem] h-[60%] border-[#EDEDED] border-2 rounded-lg p-4" 
                placeholder="Password"> 
                </input>

                <div className="absolute bottom-5 right-6 z-10">
                <NavLink onClick={PasswordShowHandler}>{showPassword ? <HiOutlineEye/> : <HiOutlineEyeSlash />}
                </NavLink>
                </div>
            </div>
            </div>
            <div className="w-[100%] mb-2 text-[0.87rem] relative flex justify-center">
                <div>
                    <input type="checkbox" id="terms"
                    onClick={(e)=>{setChecked(!e.target.checked);}} 
                    name="Terms"
                    onChange={handleInputs}
                    className="peer shrink-0 appearance-none w-[1.25rem] h-[1.25rem] border-black border-2 rounded-md checked:bg-[#FE8C00] checked:border-0 hover:cursor-pointer"></input>
                    <svg className="absolute -top-[1px] left-[2px] w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white  mt-1 outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <div className="T&C tracking-wider">
                <label htmlFor="terms">&nbsp;I Agree with<NavLink to="/">&nbsp;
                <label className="text-[#FE8C00] font-semibold hover:underline">Terms of Service</label></NavLink> and&nbsp; 
                <NavLink to="/">
                <label className="text-[#FE8C00] font-semibold hover:underline">Privacy<br/>Policy</label>
                </NavLink></label> </div>
            </div>
                
            <NavLink onClick={handleRegister}><Button text='Register'/></NavLink>

        </form>

        <OtherSignIn></OtherSignIn>

        <div className="flex justify-center mx-auto">
        <p className="font-medium">Have an account?
        <span><NavLink to="/login">&nbsp;
        <span className="text-[#FE8C00]  hover:underline">Sign In</span>
        </NavLink>
        </span></p></div>
    </div>
    </div>);
}
export default Signup;