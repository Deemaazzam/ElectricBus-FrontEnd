import { StyledTitle,StyledSubTitle,Avatar,StyledButton,BtnGroup } from "../components/Styles"
import logo from './../assets/logo.png';
const Home=()=>{
    return (
        <div>
            <div>
                <Avatar image={logo}/>
            </div>
                <StyledTitle size={65}>Welcome to Buslink</StyledTitle>
                <StyledSubTitle size={27}>Explore our Services</StyledSubTitle>
                <BtnGroup>
                    <StyledButton to="/login">Login</StyledButton>
                    <StyledButton to="/signUp">Sign Up</StyledButton>
                </BtnGroup>

        </div>
    )
}
export default Home;