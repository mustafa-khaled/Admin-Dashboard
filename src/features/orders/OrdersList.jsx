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

  return <Table tableHead={homeTableHead} tableBodyData={orders} />;
}

export default OrdersList;
