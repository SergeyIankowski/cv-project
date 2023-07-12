import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {LanguagesTableData} from "@/models/TableDataTypes";
import {LanguagesRowControlMenu} from "@/pages/Languages/LanguagesRowControlMenu/LanguagesRowControlMenu";
import {UpdateLanguageModal} from "../UpdateLanguageModal";

interface TableRowLanguagesProps {
  row: LanguagesTableData;
}

export const TableRowLanguages: FC<TableRowLanguagesProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="right">{row.name}</TableCell>
      <TableCell align="right">{row.nativeName}</TableCell>
      <TableCell align="right">{row.iso2}</TableCell>
      <TableCell align="right">
        <UpdateLanguageModal
          id={row.id}
          language={{
            name: row.name,
            native_name: row.nativeName,
            iso2: row.iso2,
          }}
        >
          <LanguagesRowControlMenu id={row.id} />
        </UpdateLanguageModal>
      </TableCell>
    </TableRow>
  );
};
