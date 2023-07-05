import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {DepartmentsTableData} from "@/models/TableDataTypes";
import {DepartmentsRowControl} from "@/pages/Departments/DepartmentsRowControlMenu";
import {UpdateDepartmentModal} from "../UpdateDepartmentModal";

interface TableRowDepartmentsProps {
  row: DepartmentsTableData;
}

export const TableRowDepartments: FC<TableRowDepartmentsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="right">
        <UpdateDepartmentModal id={row.id} name={row.name}>
          <DepartmentsRowControl id={row.id} />
        </UpdateDepartmentModal>
      </TableCell>
    </TableRow>
  );
};
