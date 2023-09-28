import axios from "axios";
//get products
export const getProducts =
  (keyword = "", currentPage,price=[0,25000],category,ratings=0) =>
  async (dispatch) => {
    console.log("inside");
    try {
      dispatch({ type: "ALL_PRODUCT_REQUEST" });
      let link = `https://konukkupoo-backend.vercel.app/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `https://konukkupoo-backend.vercel.app/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }
      const { data } = await axios(link);
      dispatch({
        type: "ALL_PRODUCT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "ALL_PRODUCT_FAIL",
        payload: error.response.data.message,
      });
    }
  };
// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: "ADMIN_PRODUCT_REQUEST" });

    const { data } = await axios.get("/api/v1/admin/products");

    dispatch({
      type: "ADMIN_PRODUCT_SUCCESS",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "ADMIN_PRODUCT_FAIL",
      payload: error.response.data.message,
    });
  }
};

//clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_ERRORS",
  });
};


//get product details
export const getProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
    const { data } = await axios(`/api/v1/product/${id}`);
    dispatch({
      type: "PRODUCT_DETAILS_SUCCESS",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAIL",
      payload: error.response.data.message,
    });
  }
};


//adding review for product
export const newReview = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "NEW_REVIEW_REQUEST" });
    console.log(formData)
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(`/api/v1/review`,formData,config);
   dispatch({type:"NEW_REVIEW_SUCCESS",payload:data.success})
   console.log("hello")
  } catch (error) {
    dispatch({
      type: "NEW_REVIEW_FAIL",
      payload: error.response.data.message,
    });
  }
};


// Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: "NEW_PRODUCT_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/products/new`,
      productData,
      config
    );

    dispatch({
      type: "NEW_PRODUCT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "NEW_PRODUCT_FAIL",
      payload: error.response.data.message,
    });
  }
};



// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PRODUCT_REQUEST" });

    const { data } = await axios.delete(`/api/v1/admin/product/${id}`);

    dispatch({
      type:"DELETE_PRODUCT_SUCCESS",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PRODUCT_FAIL",
      payload: error.response.data.message,
    });
  }
};


