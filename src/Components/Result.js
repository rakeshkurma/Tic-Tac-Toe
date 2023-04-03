import React from "react";
import "./Result.css";

const Modal = ({ showModal, setShowModal, xScore, oScore, resetAll }) => {

const Check=()=>{
    if(oScore>xScore)
    return "Y wins";
    else if(xScore>oScore)
    return "X wins";
    else
    return "Draw";
}

  if (showModal === true) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <span className="close" onClick={() => setShowModal(false)}>
            Close
          </span>
          <div className="modalContent">
            
            <p>Winner - {Check()} </p>
            <button
              onClick={() => {
                resetAll();
                setShowModal(false);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;