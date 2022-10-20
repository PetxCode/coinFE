import { Routes, Route } from "react-router-dom";
import EnterNewPassword from "./Auth/EnterNewPassword";
import Registeration from "./Auth/Registeration";
import REquestReset from "./Auth/RequestReset";
import SignIn from "./Auth/SignIn";
import LandingScreen from "./Screen/LandingScreen";

const LandingScreenDetail = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/request" element={<REquestReset />} />
        <Route path="/newPassword" element={<EnterNewPassword />} />
      </Routes>
    </div>
  );
};

export default LandingScreenDetail;
