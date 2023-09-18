import WidgetList from "../components/widget/WidgetList";
import Charts from "../components/charts/Charts";
import OrdersList from "../features/orders/OrdersList";

function Home() {
  return (
    <div className="flex w-full ">
      <div className="flex-[6]">
        <WidgetList />

        <Charts />

        <div className="p-[20px]  m-[20px] shadow-md bg-colorGrey2 text-textColor">
          <div className="mb-[20px]">Latest Transactions</div>
          <OrdersList />
        </div>
      </div>
    </div>
  );
}

export default Home;
