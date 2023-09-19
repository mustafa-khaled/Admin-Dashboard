import { useEffect, useState } from "react";
import { widgetData } from "../../data/data";
import { fetchWidgetData } from "./getWidgetData";
import Widget from "./Widget";
import SmallLoader from "../../ui/SmallLoader";

function WidgetList() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [productData, setProductData] = useState(null);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const userResult = await fetchWidgetData("users", "timeStamp");
        setUserData(userResult);

        const productResult = await fetchWidgetData("products", "timestamp");
        setProductData(productResult);

        const orderResult = await fetchWidgetData("orders", "date");
        setOrderData(orderResult);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  if (loading) return <SmallLoader />;

  return (
    <div className="p-[20px] grid gap-[20px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-textColor">
      {widgetData.map((widget, index) => {
        let amount, percentage;

        if (index === 0) {
          amount = userData?.amount;
          percentage = userData?.percentage;
        } else if (index === 1) {
          amount = productData?.amount;
          percentage = productData?.percentage;
        } else if (index === 2) {
          amount = orderData?.amount;
          percentage = orderData?.percentage;
        }

        return (
          <Widget
            key={widget.id}
            widget={widget}
            amount={amount}
            percentage={percentage}
          />
        );
      })}
    </div>
  );
}

export default WidgetList;
