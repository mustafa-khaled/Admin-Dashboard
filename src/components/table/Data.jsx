import ActionCell from "./ActionCell";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",

    width: 230,
    renderCell: (params) => {
      return (
        <div className="flex items-center gap-[10px] ">
          <img
            className="w-[32px] h-[32px]"
            src={params.row.img}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 160,
    renderCell: (params) => {
      return (
        <div
          className={`${
            params.row.status === "active" &&
            " text-green-500 bg-green-200 p-[3px] rounded-md"
          }
          ${
            params.row.status === "pending" &&
            " text-yellow-500 bg-yellow-200 p-[3px] rounded-md"
          }
            ${
              params.row.status === "passive" &&
              " text-red-500 bg-red-200 p-[3px] rounded-md"
            }         
          `}>
          {params.row.country}
        </div>
      );
    },
  },
];

export const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return <ActionCell id={params.row.id} />;
    },
  },
];
