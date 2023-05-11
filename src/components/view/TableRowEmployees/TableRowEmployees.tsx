import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DefaultUser from "@/assets/defaultUser.png";
import {UserData} from "@/models/UserData.type";

import {EmployeesRowControlMenu} from "../EmployeesRowControlMenu/EmployeesRowControlMenu";

interface TableRowTemplateProps {
  row: UserData;
}

export const TableRowEmployees: FC<TableRowTemplateProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="center">
        <img
          src={row.imgPath ? row.imgPath : DefaultUser}
          style={{borderRadius: "50%", width: "30px", height: "30px"}}
        />
      </TableCell>
      <TableCell align="right">{row.firstName}</TableCell>
      <TableCell align="right">{row.lastName}</TableCell>
      <TableCell align="right">{row.email}</TableCell>
      <TableCell align="right">{row.department}</TableCell>
      <TableCell align="right">{row.position}</TableCell>
      <TableCell align="right">
        <EmployeesRowControlMenu />
      </TableCell>
    </TableRow>
  );
};
