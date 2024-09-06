import { StyledTitle,StyledSubTitle,Avatar,StyledButton,BtnGroup,StyledFormArea,colors,Header,A,StyledDash,Ul
 ,Sidebar,MenuButton,CloseButton} from "../components/Styles"
import logo from './../assets/logo.png';
import road from './../assets/img2.png';
import build from './../assets/img1.png';
import bg from './../assets/img4.png';
import pro from './../assets/logo1.png'
import { useState ,useEffect,useRef} from "react";
import LocationAccess from "./Map";
import ElectricBusFeatures from "./Features";
const DashBoard=()=>{
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const bgRef = useRef(null);
    const roadRef = useRef(null);
    const buildRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;
            if (bgRef.current) bgRef.current.style.top = value * 0.5 + 'px';
            if (roadRef.current) roadRef.current.style.left = -value * 0.45 + 'px';
            if (buildRef.current) buildRef.current.style.top = -value * 0.35 + 'px';
            if (textRef.current) textRef.current.style.top = value * 1 + 'px';
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
    const styles = {
        section: {
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        sectionImg: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
        },
        sectionBefore: {
            content: "''",
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '3vh',
            background: 'linear-gradient(to top, #0a2a431a, transparent)',
            zIndex: 10000,
        },
        sectionAfter: {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, #0a2a431a, transparent)',
            zIndex: 10000,
            mixBlendMode: 'color',
        },
        text: {
            position: 'relative',
            color: '#fff',
            fontSize: '6em',
            zIndex: 1
        },
    };
    return (
        <StyledDash>
            <Header>
            <Avatar image={logo} style={{marginLeft:"0px"}}/> 
            <MenuButton onClick={toggleSidebar}>☰</MenuButton>
            <Ul>
                <li>   <A>Home</A> </li>
                <li>   <A>Book</A> </li>
                <li>   <A>About</A> </li>
                <li>   <A>Contact</A> </li>
                <li>    <A><img src={pro} style={{width:'35px'}}/></A></li>
            </Ul>
            </Header>
            <Sidebar isOpen={sidebarOpen}>
            <CloseButton onClick={toggleSidebar}>×</CloseButton>
                <ul>
                <li><A>Home</A></li>
                <li><A>Book</A></li>
                <li><A>About</A></li>
                <li><A>Contact</A></li>
                <li><A>Profile</A></li>
                </ul>
            </Sidebar>
            <section style={styles.section}>
            <div style={styles.sectionBefore}></div>
                <img src={bg} id="bg" ref={bgRef} style={styles.sectionImg}/>
                <img src={road} id="road" ref={roadRef} style={styles.sectionImg}/>
                <img src={build} id="build" ref={ buildRef } style={styles.sectionImg}/>
                <h2 id="text" ref={textRef} style={styles.text}>Campus Ride</h2>
                
            </section>
            <LocationAccess/>
            <ElectricBusFeatures/>

        </StyledDash>
    )
}
export default DashBoard;