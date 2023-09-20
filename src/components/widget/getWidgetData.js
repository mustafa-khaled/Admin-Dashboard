import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchWidgetData = async (category) => {
  const querySnapshot = await getDocs(collection(db, category));
  const totalAmount = querySnapshot.docs.length;

  return { amount: totalAmount, percentage: 0 };
};
