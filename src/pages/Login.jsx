import {CopyRightMessage,StyledFormArea,StyledFormButton,Avatar,StyledTitle,colors,BtnGroup, ExtraText,TextLink} from './../components/Styles'
import Logo from './../assets/logo.png';
import {Formik,Form} from 'formik';
import {TextInput} from './../components/FormLib';
import {FiMail,FiLock} from 'react-icons/fi';
import * as Yup from 'yup'
import ThreeDots from 'react-spinner-loader';
import { TailSpin } from 'react-loader-spinner';
import { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../auth/actions/userActions';
import {useNavigate} from 'react-router-dom';
const Login=({loginUser})=>{
    const [loader, setLoader] = useState(true);
    const history=useNavigate();
    return(
       
        <div>
            <StyledFormArea color={colors.light2}>
                <Avatar image={Logo}/>
                <StyledTitle color="black">Member Login </StyledTitle>
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: ""
                        }
                    }
                    validationSchema={
                        Yup.object({
                            email:Yup.string().email("Invalid Email Address").required("Required"),
                            password:Yup.string().min(8,"Password is too short").max(30,"Password is too long").required("Required")
                        })
                    }
                    onSubmit={(values,{setSubmiting,setFieldError})=>{
                        console.log(values);
                        loginUser(values,history,setFieldError,setSubmiting)
                    }}
                >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput 
                            name="email"
                            type="email"
                            label="Email Address" 
                            placeholder="example1@gmail.com"
                            required
                            icon={<FiMail/>}
                            />
                              <TextInput 
                            name="password"
                            type="password"
                            label="Password" 
                            placeholder="************"
                            required
                            icon={<FiLock/>}
                            />
                            <BtnGroup>
                               {!isSubmitting && <StyledFormButton type="submit">
                                    Login
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
                    New Here? <TextLink to='/signup'>Sign Up</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyRightMessage>CopyRight &copy; {new Date().getFullYear()}</CopyRightMessage>
        </div>
    )
}

export default connect(null,{loginUser})(Login);