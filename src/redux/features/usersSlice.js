import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { deleteUser } from "./deleteUser";

const initialState = [];
// Get All Users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const users = [];
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const user = { id: doc.id, ...doc.data() };
      // Convert Firestore Timestamp to a serializable format (string)
      user.timeStamp = user.timeStamp.toDate().toISOString();
      users.push(user);
    });
    return users;
  } catch (error) {
    throw error;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload;
      }) //Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        return state.filter((user) => user.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
