import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import {CvData} from "@/models/CvData";
import {CvsRowControlMenu} from "../CvsRowControlMenu/CvsRowControlMenu";

interface TableRowCvsProps {
  row: CvData;
}

export const TableRowCvs: FC<TableRowCvsProps> = ({row}) => {
  const checkIcon = row.isTemplate ? (
    <RadioButtonCheckedIcon />
  ) : (
    <RadioButtonUncheckedIcon />
  );
  return (
    <TableRow>
      <TableCell align="left">{checkIcon}</TableCell>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="left">{row.description}</TableCell>
      <TableCell align="left">{row.userEmail}</TableCell>
      <TableCell align="right">
        <CvsRowControlMenu />
      </TableCell>
    </TableRow>
  );
};
