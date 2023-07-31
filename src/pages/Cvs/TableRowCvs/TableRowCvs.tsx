import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import {CvTableData} from "@/models/TableDataTypes";
import {CvsRowControlMenu} from "@/pages/Cvs/CvsRowControlMenu/CvsRowControlMenu";
import Chip from "@mui/material/Chip";

interface TableRowCvsProps {
  row: CvTableData;
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
      <TableCell align="right">{row.name}</TableCell>
      <TableCell align="right">{row.description}</TableCell>
      <TableCell align="right">{row.userEmail}</TableCell>
      <TableCell align="center">
        {row.projects.map((projectName, index) => (
          <Chip
            color="error"
            variant="outlined"
            sx={{m: "2px"}}
            key={row.id + projectName + index}
            label={projectName}
          />
        ))}
      </TableCell>
      <TableCell align="right">
        <CvsRowControlMenu row={row} />
      </TableCell>
    </TableRow>
  );
};
