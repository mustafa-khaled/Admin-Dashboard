// import { createSlice } from "@reduxjs/toolkit";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../../firebase";

// const initialState = {
//   products: [],
//   loading: false,
//   error: null,
// };

// export const fetchProducts = () => {
//   return (dispatch) => {
//     const productsCollection = collection(db, "products");

//     // Set up a real-time listener using onSnapshot
//     onSnapshot(productsCollection, (querySnapshot) => {
//       const products = [];

//       querySnapshot.forEach((doc) => {
//         const product = { id: doc.id, ...doc.data() };
//         // Convert Firestore Timestamp to a serializable format (string)
//         product.timeStamp = product.timeStamp?.toDate()?.toISOString();
//         products.push(product);
//       });

//       // Dispatch the updated users to the Redux store
//       dispatch(productsFetched(products));
//     });
//   };
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,

//   reducers: {
//     productsFetched: (state, action) => {
//       state.products = action.payload; // Update products in the state
//     },
//   },
// });

// export const { productsFetched } = productsSlice.actions;
// export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    // Action to set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Action to handle successful product fetching
    productsFetched: (state, action) => {
      state.products = action.payload;
      state.loading = false; // Set loading to false after successful fetch
      state.error = null; // Clear any previous error
    },

    // Action to handle errors
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false; // Set loading to false on error
    },
  },
});

export const { setLoading, productsFetched, setError } = productsSlice.actions;
export default productsSlice.reducer;

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(setLoading(true)); // Set loading to true when fetching starts

    const productsCollection = collection(db, "products");

    onSnapshot(
      productsCollection,
      (querySnapshot) => {
        const products = [];

        querySnapshot.forEach((doc) => {
          const product = { id: doc.id, ...doc.data() };
          product.timeStamp = product.timeStamp?.toDate()?.toISOString();
          products.push(product);
        });

        dispatch(productsFetched(products)); // Dispatch products on successful fetch
      },
      (error) => {
        dispatch(setError(error.message)); // Dispatch error on fetch failure
      }
    );
  };
};
