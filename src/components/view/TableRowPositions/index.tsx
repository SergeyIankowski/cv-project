import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {PositionsData} from "@/models/PositionsData.type";

interface TableRowPositionsProps {
  row: PositionsData;
}

export const TableRowPositions: FC<TableRowPositionsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="right">{row.name}</TableCell>
    </TableRow>
  );
};
