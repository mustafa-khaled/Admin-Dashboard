import { createSlice } from "@reduxjs/toolkit";
import { onSnapshot, collection } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(usersLoading(true));

    const usersCollection = collection(db, "users");

    onSnapshot(usersCollection, (querySnapshot) => {
      const users = [];

      querySnapshot.forEach((doc) => {
        const user = { id: doc.id, ...doc.data() };
        user.timeStamp = user.timeStamp?.toDate()?.toISOString();
        users.push(user);
      });

      dispatch(usersFetched(users));
      dispatch(usersLoading(false));
    });
  };
};



export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    await deleteDoc(doc(db, "users", id));
    return id;
  } catch (error) {
    throw error;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    usersFetched: (state, action) => {
      state.users = action.payload;
    },
    usersLoading: (state, action) => {
      state.loading = action.payload;
      state.error = null;
    },
    usersError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { usersFetched, usersLoading, usersError } = usersSlice.actions;
export default usersSlice.reducer;
