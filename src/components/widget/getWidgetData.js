import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

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
