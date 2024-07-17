import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceReducer from "../features/ice/iceSlice";
import userReducer from "../features/users/userSlice";
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
