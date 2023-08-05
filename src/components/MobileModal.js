import React, { useState } from 'react';
import { UserAuth } from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const MobileModal = () => {
  const {currentUser, logout} = UserAuth();
  

  const handleLogout = async()=>{
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  
  return (

  <div>
    {
      currentUser ? (
        <div class="modal" id="my_modal_9">
        <div class="modal-box">
            <div class="modal-action">
                <a href="#" class="btn"><AiOutlineClose/></a>
            </div>
            <div className="Modal-Content">
                <a href="#my_modal_8" class="btn">View Profile <CgProfile/></a>
                {
                  currentUser ? <button className="btn" onClick={handleLogout}>Logout</button> : ''
                }
            </div>
        </div>
      </div>
      ) : ''
    }

  </div>

  )
}

export default MobileModal