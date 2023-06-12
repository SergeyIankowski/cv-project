import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {LanguagesData} from "@/models/LanguagesData";
import {LanguagesRowControlMenu} from "@/pages/Languages/LanguagesRowControlMenu/LanguagesRowControlMenu";

interface TableRowLanguagesProps {
  row: LanguagesData;
}

export const TableRowLanguages: FC<TableRowLanguagesProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="right">{row.name}</TableCell>
      <TableCell align="right">{row.nativeName}</TableCell>
      <TableCell align="right">{row.iso2}</TableCell>
      <TableCell align="right">
        <LanguagesRowControlMenu id={row.id} />
      </TableCell>
    </TableRow>
  );
};
