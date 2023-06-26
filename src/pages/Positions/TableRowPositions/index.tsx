import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {PositionsTableData} from "@/models/PositionsTableData.interface";

interface TableRowPositionsProps {
  row: PositionsTableData;
}

export const TableRowPositions: FC<TableRowPositionsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="left">{row.name}</TableCell>
    </TableRow>
  );
};
