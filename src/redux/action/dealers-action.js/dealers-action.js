import instance from "@/axios-config/axios";
import { apiCallMethods } from "@/do-not-repeat-code/do-not-repeat-code";
import { builderFailure, builderStart, builderSuccess, createbuilderFailure, createbuilderStart, createbuilderSuccess } from "@/redux/reducer/builder-reducer/builder-reducer";
import toast from "react-hot-toast";

let endPoints = {
  builderlist: "/admin/getAllbuilders",
  createbuilder: "/admin/create-builder",
}

// Thunk action creator
export const getbuilderList = (resHandler) => async (dispatch) => {
  try {
    dispatch(builderStart());
    let response = await instance({
      method: apiCallMethods.get,
      url: endPoints.builderlist,
    });

    console.log('Builder List response:', response.data);
    dispatch(builderSuccess(response.data));
    resHandler(response);
    return response.data; // Return the data in case we need it in the component
  } catch (error) {
    resHandler(error.response);
    console.error('Builder List error:', error);
    console.error('Error response:', error.response);
    const errorMessage = error.response?.data?.message || 'Builder List failed';
    toast.error(error.response?.data?.data?.message)
    dispatch(builderFailure(errorMessage));
    throw error; // Rethrow the error so we can handle it in the component
  }
};

export const CreateBuilderForm = (formData, submitFormResHandler) => async (dispatch) => {
  try {
    dispatch(createbuilderStart());
    let response = await instance({
      method: apiCallMethods.post,
      url: endPoints.createbuilder,
      data: formData
    });

    console.log('Create Builder response:', response.data); // Updated log message for clarity
    dispatch(createbuilderSuccess(response.data));
    submitFormResHandler(response); // Changed submitFormresHandler to submitFormResHandler for consistency
    return response.data; // Return the data in case we need it in the component
  } catch (error) {
    submitFormResHandler(error.response);
    console.error('Create Builder error:', error); // Updated log message for clarity
    console.error('Error response:', error.response);
    const errorMessage = error.response?.data?.message || 'Create Builder failed'; // Updated error message for clarity
    toast.error(error.response?.data?.data?.message)

    dispatch(createbuilderFailure(errorMessage));
    throw error; // Rethrow the error so we can handle it in the component
  }
};