import {MouseEvent} from "react";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import {Order} from "@/models/Order.type";
import {HeadCell} from "@/models/HeadCell.type";

interface TableHeadTemplateProps<T> {
  headCells: HeadCell<T>[];
  order: Order;
  orderBy: string;
  hasControlsColumn: boolean;
  onRequestSort: (event: MouseEvent, newOrderBy: keyof T) => void;
}

export const TableHeadTemplate = <T,>({
  headCells,
  order,
  orderBy,
  hasControlsColumn,
  onRequestSort,
}: TableHeadTemplateProps<T>) => {
  const createSortHandler = (newOrderBy: keyof T) => (event: MouseEvent) => {
    onRequestSort(event, newOrderBy);
  };
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell =>
          headCell.isSortable ? (
            <TableCell
              key={headCell.id as string}
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
            <TableCell key={headCell.id as string}>
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
