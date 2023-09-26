import React, { Fragment, useState, useEffect } from "react";
import "./upadtePassword.scss";
import Loader from "../layout/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userActions";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { Navigate, useNavigate } from "react-router-dom";
import LockOpenIcon from "@material-ui/icons/LockOpen";
const UpdatePassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate=useNavigate();
  const { error, isUpdated, loading } = useSelector((state) => state.profile);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }
    if (isUpdated) {
      alert.success("password updated");
      navigate('/')
      dispatch({
        type: "UPDATE_PASSWORD_RESET",
      });
    }
  }, [alert, error,isUpdated]);
  const updateSubmit=(e)=>{
    e.preventDefault();
    dispatch(updatePassword({oldPassword,newPassword,confirmPassword}))
  }
  return (
    <>
      {
        loading?<Loader/>:
    <div className="uppass">
        <MetaData title="Update Password" />
      <form className="up-panel" onSubmit={updateSubmit}>
        <p style={{fontSize:"1.9vmax",paddingBottom:"1.2vmax",borderBottom:"solid 1px rgba(0,0,0,.7)",width:"60%",textAlign:"center",color:"rgba(0,0,0,.7)"}}>Update Profile</p>
        <div id="oldPassword">
             <LockOpenIcon />
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            placeholder="old password"
            required
          />
        </div>
        <div id="newPassword">
             <LockOpenIcon />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            placeholder="new password"
            required
          />
        </div>
        <div id="confirmPassword">
             <LockOpenIcon />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="confirm password"
            required
          />
        </div>
        <input type="submit" value="Update Password" className="signUpBtn" />
      </form>
    </div>
    }
    </>
  
  );
};

export default UpdatePassword;
