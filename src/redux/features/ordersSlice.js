import { createSlice } from "@reduxjs/toolkit";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    ordersFetched: (state, action) => {
      state.orders = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, ordersFetched, setError } = ordersSlice.actions;
export default ordersSlice.reducer;

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    const ordersCollection = collection(db, "orders");

    onSnapshot(
      ordersCollection,
      (querySnapshot) => {
        const orders = [];
        querySnapshot.forEach((doc) => {
          const orderData = doc.data();

          // Extract necessary information from the product reference
          const productData = {
            id: orderData.product.id,
          };

          const formattedDate = orderData.date
            ?.toDate()
            ?.toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            });

          const order = {
            id: doc.id,
            product: productData,
            customer: orderData.customer,
            method: orderData.method,
            status: orderData.status,
            date: formattedDate,
          };
          orders.push(order);
        });

        dispatch(ordersFetched(orders));
      },
      (error) => {
        dispatch(setError(error.message));
      }
    );
  };
};
