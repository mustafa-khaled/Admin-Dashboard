import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
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
      state.loading = false;
      state.error = null;
    },

    // Action to handle errors
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, productsFetched, setError } = productsSlice.actions;
export default productsSlice.reducer;

export const fetchProducts = () => {
  return (dispatch) => {
    // Set loading to true when fetching starts
    dispatch(setLoading(true));

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

        dispatch(productsFetched(products));
      },
      (error) => {
        dispatch(setError(error.message));
      }
    );
  };
};

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      return id;
    } catch (error) {
      throw error;
    }
  }
);
