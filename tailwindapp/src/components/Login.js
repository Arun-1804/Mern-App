import { useState, CSSProperties } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Popup from './Popup';
import Input from "./Input";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');
export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
        setPopupProps({ ...popupProps, trigger: false });
    }

    const [popupProps, setPopupProps] = useState({
        trigger: false,
        message: "",
        title: "",
        variant: "",
        onClose: () => {},
      });
      const setValidationMessage = (message) => {
        setPopupProps({
          message: message,
          variant: "Warning",
          title: "Warning",
          trigger: true,
          onClose: () => {
            setPopupProps({ ...popupProps, trigger: false });
          },
        });
      };
    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
        if(!loginState.emailID.trim()){
            setValidationMessage("Email ID is required");
            setLoginState({...loginState,emailID:''})
          }
          else if(!loginState.password.trim()) {
            setValidationMessage("Password is required");
            setLoginState({...loginState,password:''})
          }
          else {
            setLoader(true)
            let json = {
              mailID:loginState.emailID,
              password:loginState.password
            }
            fetch("http://localhost:5000/login", {
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(json)
            })
              .then((res) => {
                // code = res.status;
                // message = res.statusText;
                // if (res.status == 200) {
                  return res?.json();
                  // }
                })
                .then((res) => {
                  if(res?.message.includes("Valid")) {
                    setLoader(false)
                    navigate("/Dashboard")
                    // return(
                        // <Link to="/Dashboard">
                        // </Link>
                    // )
                  }
                  else {
                    setLoader(false)
            setValidationMessage(res?.message);
          
          }
              });
          }
    }
    const css: CSSProperties = {
        borderColor:"rgb(19 78 74) white rgb(19 98 74) white",
        borderWidth:"1rem"
        }
    return(
        <>
        <div className='flex justify-center'>
        <ClipLoader
        loading={loader}
        size={40}
        cssOverride={css}
        aria-label="Loading Spinner"
        data-testid="loader"
         />
        </div>
      <Popup PopupProps={popupProps} />
        <form style={{marginLeft:"0px"}} onSubmit={handleSubmit}>
        <div className="-space-y-px mb-6">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>
      </form>
      </>
    )
}