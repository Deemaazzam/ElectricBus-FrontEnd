import {CopyRightMessage,StyledFormArea,StyledFormButton,Avatar,StyledTitle,colors,BtnGroup, ExtraText,TextLink} from './../components/Styles'
import Logo from './../assets/logo.png';
import {Formik,Form} from 'formik';
import {TextInput} from './../components/FormLib';
import { StyledLabel } from './../components/Styles';
import {FiMail,FiLock,FiUser} from 'react-icons/fi';
import * as Yup from 'yup';
import ThreeDots from 'react-spinner-loader';
import { TailSpin } from 'react-loader-spinner';
import { useState } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../auth/actions/userActions';
import {useNavigate} from 'react-router-dom';
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const SignUp=({signUpUser})=>{
    const [loader, setLoader] = useState(true);
    const history=useNavigate();
    const [role, setRole] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
    return(
        <div>
            <StyledFormArea color={colors.light2}>
                <Avatar image={Logo}/>
                <StyledTitle color="black">Member SignUp</StyledTitle>
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            repeatPassword: "",
                            name:"",
                            role:""
                        }
                    }
                    validationSchema={
                        Yup.object({
                            email:Yup.string().matches(EMAIL_REGEX, "Invalid Email Address").required("Required"),
                            password:Yup.string()
                            .matches(PWD_REGEX, "Password must be 8-24 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character")
                            .required("Required"),
                            name: Yup.string().required('Required'),
                            repeatPassword: Yup.string().required('Required').oneOf([Yup.ref("password"),"Password must Match"]),
                            role:Yup.string().required('Required')
                        })
                    }
                    onSubmit={(values,{setSubmiting,setFieldError})=>{
                        console.log(values);
                        signUpUser(values,history,setSubmiting,setFieldError)
                    }}
                >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput 
                            name="name"
                            type="text"
                            label="Your name" 
                            placeholder="      "
                            required
                            icon={<FiUser/>}
                            />
                             <TextInput 
                            name="email"
                            type="email"
                            label="Email Address" 
                            placeholder="example1@gmail.com"
                            required
                            icon={<FiMail/>}
                            />
                            <StyledLabel>
                                Role:
                                <br></br>
                                <select value={role} onChange={handleRoleChange}>
                                <option value="">Select your role</option>
                                <option value="Driver">Driver</option>
                                <option value="Student">Student</option>
                                </select>
                            </StyledLabel>
                              <TextInput 
                            name="password"
                            type="password"
                            label="Password" 
                            placeholder="************"
                            required
                            icon={<FiLock/>}
                            />
                              <TextInput 
                            name="repeatPassword"
                            type="password"
                            label="Confirm Password" 
                            placeholder="************"
                            required
                            icon={<FiLock/>}
                            />
                            <BtnGroup>
                               {!isSubmitting && <StyledFormButton type="submit">
                                    SignUp
                                </StyledFormButton>} 
                               
                                {isSubmitting && <TailSpin
                                                   height="80"
                                                    width="80"
                                                  color="#4fa94d"
                                                  ariaLabel="loading"
                                                 />
                                }

                            </BtnGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Already a Member? <TextLink to='/login'>Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyRightMessage>CopyRight &copy; {new Date().getFullYear()}</CopyRightMessage>
        </div>
    )
}
export default connect(null,{signUpUser})(SignUp);