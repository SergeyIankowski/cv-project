import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {SkillsTableData} from "@/models/SkillsTableData.interface";

interface TableRowSkillsProps {
  row: SkillsTableData;
}

export const TableRowSkills: FC<TableRowSkillsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="left">{row.name}</TableCell>
    </TableRow>
  );
};
