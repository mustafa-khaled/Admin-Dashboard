import { homeTableData, homeTableHead } from "../../data/data";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TableComponent() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, border: "1px solid var(--color-grey-200)" }}
          aria-label="simple table"
          className="bg-colorGrey2 ">
          <TableHead>
            <TableRow>
              {homeTableHead.map((item) => {
                return (
                  <TableCell
                    key={item.id}
                    sx={{
                      color: "var(--color-grey-600)",
                      borderBottom: "1px solid var(--color-grey-300)",
                    }}>
                    {item.title}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {homeTableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    borderBottom: "1px solid var(--color-grey-300)",
                    color: "var(--color-grey-600)",
                  }}>
                  {row.id}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid var(--color-grey-300)",
                    color: "var(--color-grey-600)",
                  }}>
                  <div className="flex items-center gap-[5px]">
                    <img
                      src={row.img}
                      alt={row.product}
                      className="w-[32px] h-[32px] "
                    />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid var(--color-grey-300)",
                    color: "var(--color-grey-600)",
                  }}>
                  {row.customer}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid var(--color-grey-300)",
                    color: "var(--color-grey-600)",
                  }}>
                  {row.date}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid var(--color-grey-300)",
                    color: "var(--color-grey-600)",
                  }}>
                  {row.amount}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid var(--color-grey-300)",
                    color: "var(--color-grey-600)",
                  }}>
                  {row.method}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid var(--color-grey-300)",
                    color: "var(--color-grey-600)",
                  }}>
                  <span
                    className={`p-[5px] rounded-md ${
                      row.status === "Approved"
                        ? "bg-green-200 text-green-500"
                        : "bg-yellow-200 text-yellow-500"
                    }`}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponent;
