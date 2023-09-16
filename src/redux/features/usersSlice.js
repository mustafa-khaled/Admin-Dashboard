import { createSlice } from "@reduxjs/toolkit";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { deleteUser } from "./deleteUser";

const initialState = [];

export const fetchUsers = () => {
  return (dispatch) => {
    const usersCollection = collection(db, "users");

    // Set up a real-time listener using onSnapshot
    onSnapshot(usersCollection, (querySnapshot) => {
      const users = [];

      querySnapshot.forEach((doc) => {
        const user = { id: doc.id, ...doc.data() };
        // Convert Firestore Timestamp to a serializable format (string)
        user.timeStamp = user.timeStamp.toDate().toISOString();
        users.push(user);
      });

      // Dispatch the updated users to the Redux store
      dispatch(usersFetched(users));
    });
  };
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetched: (state, action) => {
      return action.payload;
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
