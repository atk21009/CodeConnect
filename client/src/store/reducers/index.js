import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as reduxForm } from "redux-form";
import salReducer from "./salReducer";
import formReducer from "./formReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  salData: salReducer,
  forms: formReducer,
});
