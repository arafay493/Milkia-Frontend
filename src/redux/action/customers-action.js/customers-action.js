import instance from "@/axios-config/axios";
import { apiCallMethods } from "@/do-not-repeat-code/do-not-repeat-code";
import { createcustomerFailure, createcustomerStart, createcustomerSuccess, customerFailure, customerStart, customerSuccess } from "@/redux/reducer/customers-reducer/customers-reducer";
import toast from "react-hot-toast";

let endPoints = {
  customerlist: "/admin/getAllcustomers",
  createcustomer: "/admin/create-customer",
}

// Thunk action creator
export const getcustomerList = (resHandler) => async (dispatch) => {
  try {
    dispatch(customerStart());
    let response = await instance({
      method: apiCallMethods.get,
      url: endPoints.customerlist,
    });

    console.log('customer List response:', response.data);
    dispatch(customerSuccess(response.data));
    resHandler(response);
    return response.data; // Return the data in case we need it in the component
  } catch (error) {
    resHandler(error.response);
    console.error('customer List error:', error);
    console.error('Error response:', error.response);
    const errorMessage = error.response?.data?.message || 'customer List failed';
    toast.error(error.response?.data?.data?.message)
    dispatch(customerFailure(errorMessage));
    throw error; // Rethrow the error so we can handle it in the component
  }
};

export const CreatecustomerForm = (formData, submitFormResHandler) => async (dispatch) => {
  try {
    dispatch(createcustomerStart());
    let response = await instance({
      method: apiCallMethods.post,
      url: endPoints.createcustomer,
      data: formData
    });

    console.log('Create customer response:', response.data); // Updated log message for clarity
    dispatch(createcustomerSuccess(response.data));
    submitFormResHandler(response); // Changed submitFormresHandler to submitFormResHandler for consistency
    return response.data; // Return the data in case we need it in the component
  } catch (error) {
    submitFormResHandler(error.response);
    console.error('Create customer error:', error); // Updated log message for clarity
    console.error('Error response:', error.response);
    const errorMessage = error.response?.data?.message || 'Create customer failed'; // Updated error message for clarity
    toast.error(error.response?.data?.data?.message)

    dispatch(createcustomerFailure(errorMessage));
    throw error; // Rethrow the error so we can handle it in the component
  }
};