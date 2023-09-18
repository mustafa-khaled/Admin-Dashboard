import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkModeSlice";
import authReducer from "./features/authSlice";
import usersReducer from "./features/usersSlice";
import productsReducer from "./features/productsSlice";
import ordersReducer from "./features/ordersSlice";
import widgetReducer from "./features/widgetsSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    auth: authReducer,
    users: usersReducer,
    products: productsReducer,
    orders: ordersReducer,
    widgets: widgetReducer,
  },
});

export default store;
