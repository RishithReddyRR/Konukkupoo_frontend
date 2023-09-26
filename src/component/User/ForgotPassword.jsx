import React, { Fragment, useState, useEffect } from "react";
import "./UpdateProfile.css";
import Loader from "../layout/loader/Loader";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword} from '../../actions/userActions';
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import {Navigate, useNavigate} from 'react-router-dom'
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate=useNavigate()
  const [email, setEmail] = useState("");

  const { error, mailSent, loading } = useSelector((state) => state.profile);
  const updateProfileSubmit = (e) => {
    e.preventDefault()
    dispatch(forgotPassword(email));
  };
  useEffect(()=>{
      if(error){
        alert.error(error)
        dispatch({type:"CLEAR_ERRORS"})
      }
      if(mailSent){
        alert.success(`mail sent to ${email} successfully`)
        dispatch({type:"FORGOT_PASSWORD_RESET"})
        navigate('/')
      }
      setEmail("")
  },[error,mailSent])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Update Password" />
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form
                className="updateProfileForm"
                onSubmit={updateProfileSubmit}
              >
                
                <div className="updateProfileEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="send email"
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default ForgotPassword