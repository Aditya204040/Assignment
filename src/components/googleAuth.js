import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const GoogleAuth = () => {
const clientId = "";
return (
<div className="container flex justify-center mx-auto">
<div className="w-[23.43rem] h-[50rem] flex-col justify-between relative">
<div className="w-[20.4rem] h-[6.75] m-10 text-left">
    <h1 className="text-[2.188rem] font-semibold">Login Using your Google account.</h1>
    <p className="text-[#878787]">Please sign in to your account </p>
</div>
<div className="w-[20rem] h-6 flex-col justify-between mx-auto rounded-lg text-bold">
<GoogleOAuthProvider clientId={clientId}>
<GoogleLogin
onSuccess={credentialResponse => {
console.log(credentialResponse);
}}
onError={() => {
console.log("Login Failed");
}}
/>
</GoogleOAuthProvider>
</div>
<p className="absolute bottom-0 text-left w-[20.4rem] h-[6.75] m-10 ">Note -<br></br>You May Click On the sign In button but it wont work because i dont have a google client Id</p>
</div>
</div>
);
};

export default GoogleAuth;