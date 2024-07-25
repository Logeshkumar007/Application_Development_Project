
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateRide from "./CreateRide/CreateRide";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/createRide" element={<CreateRide />} />
      </Routes>
    </Router>
  );

};

export default App;
