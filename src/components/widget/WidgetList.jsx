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
        const userResult = await fetchWidgetData("users");
        setUserData(userResult);

        const productResult = await fetchWidgetData("products");
        setProductData(productResult);

        const orderResult = await fetchWidgetData("orders");
        setOrderData(orderResult);

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  if (loading) return <SmallLoader />;

  return (
    <div
      className="sm:p-[20px] p-[10px] grid gap-[20px] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] 
    text-textColor grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
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
