import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {DepartmentsData} from "@/models/DepartmentsData.type";

interface TableRowDepartmentsProps {
  row: DepartmentsData;
}

export const TableRowDepartments: FC<TableRowDepartmentsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="right">{row.name}</TableCell>
    </TableRow>
  );
};
