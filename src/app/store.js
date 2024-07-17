import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import iceReducer from "../features/iceCream/iceCreamSlice";
import userReducer from "../features/user/userSlice";
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
