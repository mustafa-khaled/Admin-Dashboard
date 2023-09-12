import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns, actionColumn } from "./Data";
import { Link } from "react-router-dom";

function DataTable() {
  return (
    <div className="p-[20px]">
      <div className=" flex items-center gap-[10px] my-[10px]">
        <h1 className="p-[5px]">Users:</h1>
        <Link to={"/users/new"}>
          <button className="w-[150px]  text-gray-50 bg-gray-500  p-[5px] hover:bg-gray-400">
            Add New User
          </button>
        </Link>
      </div>

      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 9, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;
