import { createReducer } from "@reduxjs/toolkit";
export const productsReducer = createReducer(
  {
    products: [],
  },
  {
    ALL_PRODUCT_REQUEST: (state, action) => {
      state.loading = true;
      state.products = [];
    },
    ALL_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.productsCount = action.payload.productsCount;
      state.resultPerPage=action.payload.resultPerPage;
      state.filteredProductsCount=action.payload.filteredProductsCount
    },
    ALL_PRODUCT_FAIL: (state, action) => {
      console.log("failed");
      console.log(state);
      state.loading = false;
      state.error = action.payload;
    },
    ADMIN_PRODUCT_REQUEST:(state,action)=>{
      state.loading=true;
    },
    ADMIN_PRODUCT_SUCCESS:(state,action)=>{
      state.loading=false;
      state.products=action.payload
    },
    ADMIN_PRODUCT_FAIL:(state,action)=>{
      state.loading=false;
      state.error=action.payload
    },
    CLEAR_ERRORS: (state, action) => {
      state = {
        ...state,
        error: null,
      };
    },
  }
);
export const productDetailsReducer = createReducer(
  {
    product: [],
  },
  {
    PRODUCT_DETAILS_REQUEST: (state, action) => {
      state.loading = true;
    },
    PRODUCT_DETAILS_SUCCESS: (state, action) => {
      state.loading = false;
      state.product= action.payload;
    },
    PRODUCT_DETAILS_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  }
);
export const newReviewReducer = createReducer(
  {
    review:{},
  },
  {
   NEW_REVIEW_REQUEST:(state,action)=>{
    state.loading=true;
   },
   NEW_REVIEW_SUCCESS:(state,action)=>{
    state.loading=false;
    state.success=action.payload;
   },
   NEW_REVIEW_FAIL:(state,action)=>{
    state.loading=false;
    state.error=action.payload
   },
   NEW_REVIEW_RESET:(state,action)=>{
    state.loading=false;
    state.success=false
   },
   CLEAR_ERRORS:(state,action)=>{
    state.error=null
   }
  }
);


export const newProductReducer=createReducer({product:{}},{
  NEW_PRODUCT_REQUEST:(state,action)=>{
    state.loading=true
  },
  NEW_PRODUCT_SUCCESS:(state,action)=>{
    state.loading=false;
    state.success=action.payload.success;
    state.product=action.payLoad.product;
  },
  NEW_PRODUCT_FAIL:(state,action)=>{
    state.loading=false;
    state.error=action.payLoad
  },
  NEW_PRODUCT_RESET:(state,action)=>{
    state.loading=false
    state.success=false
  },
  CLEAR_ERRORS:(state,action)=>{
    state.error=null
  }
})

export const productReducer=createReducer({},{
  UPDATE_PRODUCT_REQUEST:(state,action)=>{
    state.loading=true
  },
  UPDATE_PRODUCT_SUCCESS:(state,action)=>{
    state.loading=false;
    state.isUpdated=action.payload;
  },
  UPDATE_PRODUCT_FAIL:(state,action)=>{
    state.loading=false
    state.error=action.payload
  },
  UPDATE_PRODUCT_RESET:(state,action)=>{
    state.loading=false;
    state.isUpdated=false;
  },
  DELETE_PRODUCT_REQUEST:(state,action)=>{
    state.loading=true
  },
  DELETE_PRODUCT_SUCCESS:(state,action)=>{
    state.loading=false;
    state.isDeleted=action.payload;
  },
  DELETE_PRODUCT_FAIL:(state,action)=>{
    state.loading=false
    state.error=action.payload
  },
  DELETE_PRODUCT_RESET:(state,action)=>{
    state.loading=false;
    state.isDeleted=false;
  },
})
