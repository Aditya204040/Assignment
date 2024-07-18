import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components
import Login from './components/login';
import Onboarding from './components/onboarding';
import GoogleAuth from './components/googleAuth';
import Signup from './components/signup';
import SuccessLogin from './components/LoginSuccess';
import TrackingScreen from './components/Tracking';

function App() {
  return (
    <div className="App mx-auto">
      <Routes>
        <Route path='/' element={<Onboarding></Onboarding>}/>
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<Signup/>}/>
        <Route path='Onboard' element={<Onboarding/>} />
        <Route path='googleAuth' element={<GoogleAuth/>}/>
        <Route path='LoginSuccess' element={<SuccessLogin/>}/>
        <Route path='/Track' element={<TrackingScreen/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
