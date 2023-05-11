import {FC, MouseEvent} from "react";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import {Order} from "@/models/Order.type";
import {HeadCell} from "@/models/HeadCell.type";
import {UserData} from "@/models/UserData.type";

interface TableHeadTemplateProps {
  headCells: HeadCell<UserData>[];
  order: Order;
  orderBy: string;
  hasControlsColumn: boolean;
  onRequestSort: (event: MouseEvent, newOrderBy: keyof UserData) => void;
}

export const TableHeadTemplate: FC<TableHeadTemplateProps> = ({
  headCells,
  order,
  orderBy,
  hasControlsColumn,
  onRequestSort,
}) => {
  const createSortHandler =
    (newOrderBy: keyof UserData) => (event: MouseEvent) => {
      onRequestSort(event, newOrderBy);
    };
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell =>
          headCell.isSortable ? (
            <TableCell
              key={headCell.id}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              align="right"
              variant="head"
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.content}
              </TableSortLabel>
            </TableCell>
          ) : (
            <TableCell key={headCell.id}>
              <Box sx={{width: "45px"}}>{headCell.content}</Box>
            </TableCell>
          )
        )}
        {hasControlsColumn && (
          <TableCell>
            <Box sx={{width: "45px"}} />
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
};
