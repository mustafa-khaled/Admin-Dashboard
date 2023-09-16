import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { widgetData } from "../../data/data";
import { db } from "../../firebase";
import Widget from "./Widget";

function WidgetList() {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, "users"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );

      const prevMonthQuery = query(
        collection(db, "users"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );
    };

    fetchData();
  }, []);

  return (
    <div className=" p-[20px] flex items-center gap-[20px] text-textColor">
      {widgetData.map((widget) => {
        return <Widget key={widget.id} widget={widget} />;
      })}
    </div>
  );
}

export default WidgetList;
