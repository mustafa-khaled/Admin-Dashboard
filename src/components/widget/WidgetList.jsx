import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { widgetData } from "../../data/data";
import { fetchWidgetDataAsync } from "../../redux/features/widgetsSlice";
import Widget from "./Widget";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Loader";

function WidgetList() {
  const dispatch = useDispatch();
  const { amount, percentage, loading, error } = useSelector(
    (state) => state.widgets
  );

  useEffect(() => {
    dispatch(fetchWidgetDataAsync("users", "timeStamp"));
    // dispatch(fetchWidgetDataAsync("orders", "date"));
    // dispatch(fetchWidgetDataAsync("products", "timestamp"));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Empty content={error} />;
  }

  return (
    <div className=" p-[20px] grid gap-[20px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-textColor">
      {widgetData.map((widget) => (
        <Widget
          key={widget.id}
          widget={widget}
          amount={amount}
          percentage={percentage}
        />
      ))}
    </div>
  );
}

export default WidgetList;
