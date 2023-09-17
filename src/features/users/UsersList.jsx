import { DataGrid } from "@mui/x-data-grid";
import { userColumns, actionColumn } from "./UsersData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/features/usersSlice";
import AddEditUser from "./AddEditUser";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function UsersList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-[20px] text-textColor">
      <div className=" flex items-center justify-between gap-[10px] my-[10px]">
        <h1 className="p-[5px]">Users:</h1>
        <AddEditUser>
          <PersonAddIcon className="text-colorBrand cursor-pointer" />
        </AddEditUser>
      </div>

      <DataGrid
        rows={users}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 9, 10]}
        checkboxSelection
        sx={{
          color: "var(--color-grey-600)",
          border: "1px solid var(--color-grey-300)",
          "& .MuiDataGrid-cell": {
            borderColor: "var(--color-grey-300)",
          },
          "& .MuiTablePagination-root": {
            color: "var(--color-grey-600)",
          },
          "& .MuiDataGrid-columnHeaders ": {
            borderColor: "var(--color-grey-300)",
          },

          "& .MuiDataGrid-footerContainer": {
            borderColor: "var(--color-grey-300)",
          },
        }}
      />
    </div>
  );
}

export default UsersList;
