import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {ProjectTableData} from "@/models/TableDataTypes";
import {EmptyFieldStrings} from "@/models/emptyFieldsStrings";

interface TableRowCvProjectsProps {
  row: ProjectTableData;
}

export const TableRowCvProjects: FC<TableRowCvProjectsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="right">{row.name}</TableCell>
      <TableCell align="right">{row.internalName}</TableCell>
      <TableCell align="right">{row.domain}</TableCell>
      <TableCell align="right">{row.startDate}</TableCell>
      <TableCell align="right">
        {row.endDate || EmptyFieldStrings.tillNow}
      </TableCell>
    </TableRow>
  );
};
