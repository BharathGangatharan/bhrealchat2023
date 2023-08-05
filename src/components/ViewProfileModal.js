import React from "react";
import { UserAuth } from "../context/AuthContext";

const ViewProfileModal = () => {

    const currentUser =  UserAuth();
   

  return (
    <div class="modal" id="my_modal_8">
        <div class="modal-box">
            <h3 class="font-bold text-3xl align-middle text-center mb-4">My Profile</h3>
            <div className="Modal-Content">
                {
                    currentUser.currentUser !== null ? (
                        <div>
                    <div>
                        <img src={currentUser.currentUser.photoURL} alt="" />
                    </div>
                    <h3 className="text-2xl">Name: <span className="font-bold">{currentUser.currentUser.displayName}</span></h3>
                    <h3 className="text-base">Email: <span className="font-bold">{currentUser.currentUser.email}</span></h3></div>): ''
                }
            </div>
            <div class="modal-action">
                <a href="#" class="btn">Close</a>
            </div>
        </div>
    </div>
  );
};

export default ViewProfileModal;
