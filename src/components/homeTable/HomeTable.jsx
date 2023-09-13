import Table from "./Table";

function HomeTable() {
  return (
    <div className="p-[20px]  m-[20px] shadow-md bg-colorGrey2 text-textColor">
      <div className="mb-[20px]">Latest Transactions</div>
      <Table />
    </div>
  );
}

export default HomeTable;
