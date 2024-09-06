import { StyledContainer } from "./components/Styles";
import Home from './pages/Home';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard-User'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignUp from './pages/SignUp';
function App() {
  return (
    // <Router>
    // <StyledContainer>
    //  <Routes>
    //     <Route path="/signup" element={<SignUp/>}/>
    //     <Route path="/login" element={<Login/>}/>
    //     <Route path="/dashboard" element={<DashBoard/>}/>
    //     <Route path="/" element={<Home/>}/>
    //  </Routes>
    // </StyledContainer>
    // </Router>
     <Router>
      <StyledContainer>
        <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
      </StyledContainer>
     </Router>
  );
}

export default App
