import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns, actionColumn } from "./Data";

function DataTable() {
  return (
    <div className="p-[20px]">
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
