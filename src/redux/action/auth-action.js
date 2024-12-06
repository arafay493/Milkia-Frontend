import instance from "@/axios-config/axios";
import { signinStart, signinSuccess, signinFailure } from "../reducer/auth-reducer/auth-reducer";
import axios from 'axios';
import { apiCallMethods } from "@/do-not-repeat-code/do-not-repeat-code";

let endPoints = {
  signin: "/admin/adminlogin",
}

// Thunk action creator
export const SigninUser = (userData, resHandler) => async (dispatch) => {
  try {
    dispatch(signinStart());
    console.log('Sending Sign In request with data:', userData);
    // const response = await axios.post('http://103.125.240.77:3000/api/admin/adminlogin', userData);
    let response = await instance({
      method: apiCallMethods.post,
      url: endPoints.signin,
      data: userData,
    });

    console.log('Sign In response:', response.data);
    dispatch(signinSuccess(response.data));
    resHandler(response);
    return response.data; // Return the data in case we need it in the component
  } catch (error) {
    resHandler(error.response);
    console.error('Sign In error:', error);
    console.error('Error response:', error.response);
    const errorMessage = error.response?.data?.message || 'Sign In failed';
    dispatch(signinFailure(errorMessage));
    throw error; // Rethrow the error so we can handle it in the component
  }
};