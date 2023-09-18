import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  amount: null,
  percentage: null,
  loading: false,
  error: null,
};

const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    setWidgetData: (state, action) => {
      state.amount = action.payload.amount;
      state.percentage = action.payload.percentage;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchWidgetData = async (category, value) => {
  const today = new Date();
  const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

  const lastMonthQuery = query(
    collection(db, category),
    where(value, "<=", today),
    where(value, ">", lastMonth)
  );

  const prevMonthQuery = query(
    collection(db, category),
    where(value, "<=", lastMonth),
    where(value, ">", prevMonth)
  );

  const lastMonthData = await getDocs(lastMonthQuery);
  const prevMonthData = await getDocs(prevMonthQuery);

  const amount = lastMonthData.docs.length;
  const percentage =
    ((lastMonthData.docs.length - prevMonthData.docs.length) /
      prevMonthData.docs.length) *
    100;

  return { amount, percentage };
};

export const { setWidgetData, setLoading, setError } = widgetSlice.actions;

// Async action to fetch widget data
export const fetchWidgetDataAsync = (category, value) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const { amount, percentage } = await fetchWidgetData(category, value);

    dispatch(setWidgetData({ amount, percentage }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const selectWidgetData = (state) => state.widget;
export default widgetSlice.reducer;
