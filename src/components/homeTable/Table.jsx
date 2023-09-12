import { homeTableData } from "../../data/data";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tracking ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Date </TableCell>
            <TableCell>Amount </TableCell>
            <TableCell>Payment Method </TableCell>
            <TableCell>Amount </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {homeTableData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-[5px]">
                  <img
                    src={row.img}
                    alt={row.product}
                    className="w-[32px] h-[32px] "
                  />
                  {row.product}
                </div>
              </TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell>
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
  );
}

export default TableComponent;
