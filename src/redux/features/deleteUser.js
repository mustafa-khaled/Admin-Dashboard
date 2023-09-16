import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    await deleteDoc(doc(db, "users", id));
    return id;
  } catch (error) {
    throw error;
  }
});
