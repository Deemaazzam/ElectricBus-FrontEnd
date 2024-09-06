import axios from 'axios';
import {sessionService} from 'redux-react-session';
export const loginUser=(credentials,history,setFieldError,setSubmiting)=>{
    axios.post('https://pear-calm-cape-buffalo.cyclic.app/login',credentials,{
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response)=>{
            const {data}=response;
            if(data.status==="FAILED"){
                const {message}=data;
                if(message.includes('Empty')){
                    setFieldError("email",message);
                    setFieldError("password",message);
                }
                else if(message.includes('Passwords')){
                    setFieldError("password",message);
                }
            }
            else if(data.status==="SUCCESS"){
                const userData=data.data[0];
                const token=userData._id;
                sessionService.saveSession(token).then(()=>{
                    sessionService.saveUser(userData).then(()=>{
                        history.push('/dashboard');
                    }).catch(error=>{console.log(error)});
                }).catch(error=>{

                });
            }
            setSubmiting(false);
    }).catch(error=>{
        console.log(error);
    })
}
export const signUpUser=(credentials,history,setFieldError,setSubmiting)=>{

}
export const logoutUser=()=>{

}