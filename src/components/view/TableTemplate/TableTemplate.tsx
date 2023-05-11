import {FC, ReactNode} from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

interface TableTemplateProps {
  children: ReactNode;
}

export const TableTemplate: FC<TableTemplateProps> = ({children}) => {
  return (
    <Paper variant="outlined">
      <TableContainer>
        <Table sx={{minWidth: 750}} aria-labelledby="tableTitle">
          {children}
        </Table>
      </TableContainer>
    </Paper>
  );
};
