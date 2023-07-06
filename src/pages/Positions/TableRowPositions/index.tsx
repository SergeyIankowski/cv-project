import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {PositionsTableData} from "@/models/TableDataTypes";
import {PositionsRowControl} from "../PositionsRowControlMenu";
import {UpdatePositionModal} from "../UpdatePositionModal";

interface TableRowPositionsProps {
  row: PositionsTableData;
}

export const TableRowPositions: FC<TableRowPositionsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="right">
        <UpdatePositionModal id={row.id} name={row.name}>
          <PositionsRowControl id={row.id} />
        </UpdatePositionModal>
      </TableCell>
    </TableRow>
  );
};
