import axios from "axios";
const global={url:"https://konukkupoo-backend.vercel.app"}
//LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const config = { headers: { "Content-Type": "application/json",withCredentials:true } };

    const { data } = await axios.post(
      `${global.url}/api/v1/login`,
      { email, password },
      config
    );

    dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.response.data.message });
  }
}
// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_USER_REQUEST" });

    const config = { headers: { "Content-Type": "multipart/form-data",withCredentials:true } };

    const { data } = await axios.post(`${global.url}/api/v1/register`, userData, config);

    dispatch({ type: "REGISTER_USER_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "REGISTER_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};
//load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_USER_REQUEST" });


    const { data } = await axios.get(`${global.url}/api/v1/me`);

    dispatch({ type: "LOAD_USER_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "LOAD_USER_FAIL", payload: error.response.data.message });
  }
}
//logout user
export const logout = () => async (dispatch) => {
  try {
    await axios.get('${global.url}/api/v1/logout')
    dispatch({ type: "LOGOUT_SUCCESS" });
  } catch (error) {
    dispatch({ type: "LOGOUT_FAIL", payload: error.response.data.message });
  }
}
// Update profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PROFILE_REQUEST" });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(`${global.url}/api/v1/me/update`, userData, config);

    dispatch({ type: "UPDATE_PROFILE_SUCCESS",payload:data.success });
    dispatch({ type: "REGISTER_USER_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "REGISTER_USER_FAIL",
      payload: error.response.data.message,
    });
    dispatch({
      type: "UPDATE_PROFILE_FAIL",
      payload: error.response.data.message,
    });
  }
};
// Update password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PASSWORD_REQUEST" });
    const config={
      headers:{
        "Content-Type":"application/json"
      }
    }

    const { data } = await axios.put(`${global.url}/api/v1/password/update`,passwords,config);

    dispatch({ type: "UPDATE_PASSWORD_SUCCESS",payload:data.success });
  } catch (error) {
    dispatch({
      type: "UPDATE_PASSWORD_FAIL",
      payload: error.response.data.message,
    });
  }
};
// reset password
export const resetPassword = (passwords,token) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PASSWORD_REQUEST" });
    const config={
      headers:{
        "Content-Type":"application/json"
      }
    }

    const { data } = await axios.put(`${global.url}/api/v1/password/reset/${token}`,passwords,config);

    dispatch({ type: "UPDATE_PASSWORD_SUCCESS",payload:data.success });
  } catch (error) {
    dispatch({
      type: "UPDATE_PASSWORD_FAIL",
      payload: error.response.data.message,
    });
  }
};

//forgot password
export const forgotPassword=(email)=>async (dispatch)=>{
  try {
    dispatch({type:"FORGOT_PASSWORD_REQUEST"})
  const {data}=await axios.post('${global.url}/api/v1/password/forgot',{email})
    dispatch({type:"FORGOT_PASSWORD_SUCCESS"})
  } catch (error) {
    dispatch({type:"FORGOT_PASSWORD_FAIL",payload:error.response.data.message})    
  }
  
}

// get All Users
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_USERS_REQUEST" });
    const { data } = await axios.get(`${global.url}/api/v1/admin/users`);

    dispatch({ type: "ALL_USERS_SUCCESS", payload: data.users });
  } catch (error) {
    dispatch({ type: "ALL_USERS_FAIL", payload: error.response.data.message });
  }
};


// Delete User
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_USER_REQUEST" });

    const { data } = await axios.delete(`${global.url}/api/v1/admin/user/${id}`);

    dispatch({ type: "DELETE_USER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "DELETE_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS"});
};
