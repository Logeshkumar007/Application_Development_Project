import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BookRide from './components/BookRide/BookRide'
import Homepage from './components/Homepage/Homepage'
import SignInSide from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import CreateRide from './CreateRide/CreateRide'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/createRide" element={<CreateRide />} />
        <Route path="/bookRide" element={<BookRide />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/signin' element={<SignInSide />} />
      </Routes>
    </Router>
  )
}

export default App
