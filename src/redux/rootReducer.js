import { combineReducers } from "redux";
import { authReducer } from "./auth/authSlice";
import { diaryReducer } from "./diary/diarySlice";
import loadingReducer from "./loading/loadingSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  diary: diaryReducer,
});

export default rootReducer;
