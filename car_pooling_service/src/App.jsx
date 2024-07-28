import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookRide from "./components/BookRide/BookRide";
import Homepage from "./components/Homepage/Homepage";
import SignInSide from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import CreateRide from "./components/CreateRide/CreateRide";
import Navbar from "./components/NavBar/NavBar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Dummy from "./components/Dummy";
import SuccessSignIn from './components/SignIn/SuccessSignin'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/createRide" element={<CreateRide />} />
        <Route path="/bookRide" element={<BookRide />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path='/loginSuccess' element={<SuccessSignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
