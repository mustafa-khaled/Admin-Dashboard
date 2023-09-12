import Table from "./Table";

function HomeTable() {
  return (
    <div className="px-[20px] py-[5px] m-[20px] shadow-md">
      <div className="mb-[20px] text-gray-700">Latest Transactions</div>
      <Table />
    </div>
  );
}

export default HomeTable;
