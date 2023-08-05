import { UserAuth } from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

  const {currentUser, logout} = UserAuth();

  const handleLogout = async()=>{
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={`navbar ${currentUser ? 'ModalShow' : ''}`}>
      <div className="containerWrapperNav flex justify-between">
        <h1 className="btn-ghost normal-case text-4xl">BhChat</h1>
        <div className="view-profile-sec deskTop">
          <a href="#my_modal_8" class="btn modalBtn">View Profile <CgProfile/></a>
          {
            currentUser ? <button className="btn" onClick={handleLogout}>Logout</button> : ''
          }
        </div>

        <div className="view-profile-sec mobile">

          {
            currentUser ? <a href="#my_modal_9" class=""><RxHamburgerMenu /></a> : ''
          }
        
          
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
