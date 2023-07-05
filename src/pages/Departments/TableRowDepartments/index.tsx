import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {DepartmentsTableData} from "@/models/TableDataTypes";
import {DepartmentsRowControl} from "@/pages/Departments/DepartmentsRowControlMenu";

interface TableRowDepartmentsProps {
  row: DepartmentsTableData;
}

export const TableRowDepartments: FC<TableRowDepartmentsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="right">
        <DepartmentsRowControl id={row.id} />
      </TableCell>
    </TableRow>
  );
};
