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
    const usersCollection = collection(db, "users");

    // Set up a real-time listener using onSnapshot
    onSnapshot(usersCollection, (querySnapshot) => {
      const users = [];

      querySnapshot.forEach((doc) => {
        const user = { id: doc.id, ...doc.data() };
        // Convert Firestore Timestamp to a serializable format (string)
        user.timeStamp = user.timeStamp?.toDate()?.toISOString();
        users.push(user);
      });

      // Dispatch the updated users to the Redux store
      dispatch(usersFetched(users));
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
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    });
  },
});

export const { usersFetched } = usersSlice.actions;
export default usersSlice.reducer;
