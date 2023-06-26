import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Avatar} from "@mui/material";
import DefaultUser from "@/assets/defaultUser.png";
import {UserTableData} from "@/models/TableDataTypes/UserTableData.interface";
import {EmployeesRowControlMenu} from "@/pages/Employees/EmployeesRowControlMenu/EmployeesRowControlMenu";

interface TableRowTemplateProps {
  row: UserTableData;
}

export const TableRowEmployees: FC<TableRowTemplateProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell>
        <Avatar src={row.imgPath ? row.imgPath : DefaultUser} />
      </TableCell>
      <TableCell align="right">{row.firstName}</TableCell>
      <TableCell align="right">{row.lastName}</TableCell>
      <TableCell align="right">{row.email}</TableCell>
      <TableCell align="right">{row.department}</TableCell>
      <TableCell align="right">{row.position}</TableCell>
      <TableCell align="right">
        <EmployeesRowControlMenu id={row.id} />
      </TableCell>
    </TableRow>
  );
};
