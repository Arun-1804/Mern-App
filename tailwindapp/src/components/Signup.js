import { useState, CSSProperties } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import Popup from './Popup';
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "../components/Modal"
// import axios from "axios"


const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const [loader, setLoader] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleChange=(e)=> {
    setSignupState({...signupState,[e.target.id]:e.target.value});
    setPopupProps({ ...popupProps, trigger: false });
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    createAccount()
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
  //handle Signup API Integration here
  const createAccount=()=>{
if(!signupState.username.trim()){
  setValidationMessage("User Name is required");
  setSignupState({...signupState,username:''})
}
else if(!signupState.emailID.trim()) {
  setValidationMessage("Email ID is required");
  setSignupState({...signupState,emailID:''})
}
else if(!signupState.password.trim()) {
  setValidationMessage("Password is required");
  setSignupState({...signupState,password:''})
}
else if(!signupState.confirmPassword.trim()) {
  setValidationMessage("Confirm Password is required");
  setSignupState({...signupState,confirmPassword:''})
}
else {
  setLoader(true)
  let json = {
    userName :signupState.username,
    mailID:signupState.emailID,
    password:signupState.password
  }
  fetch("http://localhost:5000/signUp", {
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
        if(res?.message.includes("success")) {
          setLoader(false)
          setShowModal(true)
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
      {
        showModal ? 
        <Modal /> : ""
      }
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
        <form className="mt-8 space-y-6">
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
      </>


    )
}