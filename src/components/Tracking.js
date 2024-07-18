import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AnalogClock from "./TrackingComponents/clock";
import SpeedSlider from "./TrackingComponents/Slider";
import ShareButton from "./TrackingComponents/Share";
import Quotes from './TrackingComponents/quotes.js';



function Tracking(){
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    const query = useQuery();
    const navigate = useNavigate();
    const initialSpeed = parseFloat(query.get('speed')) || 1;
    const [speed, setSpeed] = useState(initialSpeed);

    useEffect(() => {
        const url = new URL(window.location.href);
        url.searchParams.set('speed', speed.toString());
        navigate(`${url.pathname}${url.search}`, { replace: true });
      }, [speed, navigate]);

    return(
    <div className="container flex justify-center mx-auto">
    <div className='w-[23.43rem] h-screen relative flex-col justify-between '>
        <div className='my-6 mt-2'><h1 className='text-[2rem] font-semibold '>Tracking Screen</h1></div>
        <div><AnalogClock speed={speed}/></div>
        <div className='bg-white w-[100%] h-[25rem] bg-transparent  rounded-t-sm'>
            <SpeedSlider speed={speed} setSpeed={setSpeed}/>
            <ShareButton speed={speed}/>
            <Quotes></Quotes>
        </div>
    </div> 
    </div>
    );
}

export default Tracking;