import { useDispatch, useSelector } from "react-redux";
import { homeTableHead } from "../../data/data";
import { useEffect } from "react";
import { fetchOrders } from "../../redux/features/ordersSlice";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";

function OrdersList() {
  const { orders, loading, error } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <Empty content={error} />;
  if (!orders.length) return <Empty content={"No Orders To Show"} />;

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-60px)]">
      <div className=" p-[20px] w-[90%] shadow-md bg-colorGrey2 text-textColor">
        <div className="mb-[20px]">Latest Transactions</div>
        <Table tableHead={homeTableHead} tableBodyData={orders} />
      </div>
    </div>
  );
}

export default OrdersList;
