

import React from "react";
import propTypes from "prop-types";
import Tick from "../assests/success.png";
// import Cancel from "../Images/Cancel-Circle-Off.png";
import {Link} from "react-router-dom"

const Modal = ({ ModalProps }) => {
  /* proptypes */
  Modal.propTypes = {
    ModalProps: propTypes.object.isRequired,
  };

  /* render */
  return ( 
     <div
      id="container"
    //   onClick={handleOnClose}
    style={{zIndex:"100000"}}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-4 rounded">
        <div className="flex justify-center items-center font-semibold  text-xl text-gray-700">
        <img
        style={{height:"40px",width:"40px"}}
        src={Tick}
        alt="success"
       />
<span className="ml-2">success</span>
        </div>
        {/* <h1 >
          Thanks for Signing up
        </h1> */}
        <p className="text-center text-gray-700 mb-5">Congratulations, your account has been successfully created.</p>

        <div className="flex flex-col">
        </div>
        <div className="text-center">
            <Link to="/">
          <button className="px-5 py-2 bg-gray-700 hover:bg-gray-900 text-white rounded">
            continue
          </button>
            </Link>
        </div>
      </div>
    </div>
  )
};

export default Modal;
