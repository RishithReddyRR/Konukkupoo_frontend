import { createReducer } from "@reduxjs/toolkit";
export const userReducer = createReducer(
  { user: {}, error: null },
  {
    LOGIN_REQUEST: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOGIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOGIN_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    REGISTER_USER_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    LOAD_USER_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
    REGISTER_USER_REQUEST: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOAD_USER_REQUEST: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    REGISTER_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOAD_USER_SUCCESS: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
    LOGOUT_SUCCESS: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
    LOGOUT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
export const profileReducer = createReducer(
  {},
  {
    UPDATE_PROFILE_REQUEST: (state, action) => {
      state.loading = true;
    },
    UPDATE_PROFILE_SUCCESS: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
      state.isAuthenticated = true;
    },
    UPDATE_PROFILE_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UPDATE_PROFILE_RESET: (state, action) => {
      state.isUpdated = false;
    },
    UPDATE_PASSWORD_REQUEST: (state, action) => {
      state.loading = true;
    },
    UPDATE_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
      state.isAuthenticated = true;
    },
    UPDATE_PASSWORD_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UPDATE_PASSWORD_RESET: (state, action) => {
      state.isUpdated = false;
    },
    FORGOT_PASSWORD_REQUEST: (state, action) => {
      state.loading = true;
    },
    FORGOT_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.mailSent = true;
    },
    FORGOT_PASSWORD_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    FORGOT_PASSWORD_RESET: (state, action) => {
      state.mailSent = false;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  }
);

export const allUserReducer=createReducer({users:[]},{
  ALL_USERS_REQUEST:(state,action)=>{
    state.loading=true
  },
  ALL_USERS_SUCCESS:(state,action)=>{
    state.loading=false
    state.users=action.payload
  },
  ALL_USERS_FAIL:(state,action)=>{
    state.loading=false
    state.error=action.payload
  },
})
