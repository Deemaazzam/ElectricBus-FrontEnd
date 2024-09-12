import { StyledContainer } from "./components/Styles";
import Home from './pages/Home';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard-User'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import ThankYouPage from "./pages/Thankyou";
function App() {
  return (
     <Router>
      <StyledContainer>
        <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/thank-you" element={<ThankYouPage/>}/>
        </Routes>
      </StyledContainer>
     </Router>
  );
}

export default App
