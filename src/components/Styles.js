import styled from 'styled-components';
import background from "./../assets/bg.jpg";
import {Link} from 'react-router-dom';
export const colors={
    primary:"#fff",
    theme:"#BE185D",
    light1:"#F3F1F6",
    light2:"#E5E7EB",
    dark1:"#1F2937",
    dark2:"#4B5563",
    dark3:"#9CA3AF",
    red:"#DC2626"
}
export const StyledContainer=styled.div`
    margin: 0;
    min-height: 98vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(0deg,rgba(0,0,0,0.6),rgba(255,255,255,0.6)),url(${background});
    background-size:cover;
    background-attachement:fixed;
`;
export const StyledDash=styled.div`
    margin: 0;
    padding:0;
    min-height: 100%;
    min-width:100%;
`;
export const StyledTitle=styled.h2`
    font-size:${(props)=>props.size}px;
    text-align:center;
    color:${(props)=>props.color || colors.primary};
    padding: 2rem;
    margin-bottom:2%;

`;
export const StyledSubTitle=styled.p`
    font-size:${(props)=>props.size}px;
    text-align:center;
    color: ${(props)=>props.color || colors.primary};
    padding: 2rem;
    margin-bottom:0.2%;

`;
export const Avatar=styled.div`
    width:85px;
    height:85px;
    border-radius:50px;
    background-image:url(${props=>props.image});
    background-size:cover;
    background-position:center;
    margin:auto;
    @media (max-width: 768px) {
    width:45px;
    height:45px;
  }
`;
export const StyledButton=styled(Link)`
    padding:10px;
    width:150px;
    background-color:transparent;
    font-size:16px;
    border:3px solid ${colors.primary};
    border-radius:25px;
    color:${colors.primary};
    text-decoration:none;
    text-align:center;
    transition:ease-in-out 0.3s;
    &:hover{
        background-color: ${colors.primary};
        color:${colors.theme};
        cursor:pointer;

    }
`;
export const BtnGroup=styled.div`
        display:flex;
        justify-content:space-around;
        flex-direction:row;
        margin-top:25px;


`;
export const StyledTextInput=styled.input`
    width:280px;
    padding:15px;
    padding-left:50px;
    font-size:16px;
    letter-spacing:1px;
    color:${colors.light2};
    border:0;
    outline:0;
    display:block;
    margin:5px auto 10px;
    transition: ease-in-out 0.3s;

    ${(props)=>props.invalid && `background-color:${colors.red};color:${colors.primary}`}
    &:focus{
        background-color:${colors.dark2};
        color:${colors.primary};

    }
`
export const StyledLabel=styled.label`
    text-align:left;
    font-size:13px;
    font-weight:bold;


`;
export const StyledFormArea=styled.div`
    background:${(props=>props.color || colors.light2)};
    text-align:center;
    padding:45px 55px;

`;
export const StyledFormButton=styled.button`
    padding:10px;
    width:150px;
    background-color:transparent;
    font-size:16px;
    border:2px solid ${colors.theme};
    border-radius:25px;
    color:${colors.theme};
    outline:0;
    text-align:center;
    transition:ease-in-out 0.3s;
    &:hover{
        background-color: ${colors.theme};
        color:${colors.primary};
        cursor:pointer;

    }
`;
export const StyledIcon=styled.p`
    color:${colors.dark1};
    position:absolute;
    font-size:21px;
    top:35px;
    ${props=>props.right && 'right:15px'}
    ${props=>!props.right && 'left:15px'}

`;
export const ErrorMsg=styled.div`
    font-size:11px;
    color:${colors.red};
    margin-top:-5px;
    margin-bottom:10px;
    text-align:left;


`;
export const ExtraText=styled.p`
    font-size:${(props)=>props.size}px;
    text-align:center;
    color:${(props)=>props.color?props.color:colors.dark2};
    padding:2px;
    margin-top:10px;
`;
export const TextLink=styled(Link)`
    text-decoration:none;
    transition:ease-in-out 0.3s;
    color:${colors.theme};

    &:hover{
        text-decoration:underline;
        letteer-spacing:2px;
        font-weight:bold;

    }

`;
export const CopyRightMessage=styled.p`
    padding:5px;
    margin:20px;
    text-align:center;
    color:${colors.light2};


`;
export const Header=styled.header`
    position:absolute;
    top:0%;
    left:0%;
    width:100%;
    background-color:${colors.light1};
    display:flex;
    align-items:center;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 20px;
    z-index:100;
  };
   @media (max-width: 768px) {
    height:25%;
    
  }
`;
export const Sidebar = styled.div`
  width: 250px;
  height: 100%;
  background-color: ${colors.dark2};
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  margin-left: auto;
  ul {
    padding: 20px;
    list-style-type: none;
    li {
      margin-bottom: 20px;
    }
  }
`;
export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  margin: 10px 10px 0 auto;
  display: block;
`;

export const A=styled.a`
    font-weight:bold;
    margin:10px;
    border-raduis:20px;
    text-decoration:none;
    &:hover {
    color: #007bff; 
    cursor: pointer; 
  };
`;
export const Ul=styled.ul`
    list-style-type: none;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    @media (max-width: 768px) {
    display: none;
  }
`;
export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;
