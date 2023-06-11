import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {SkillsData} from "@/models/SkillsData.type";

interface TableRowSkillsProps {
  row: SkillsData;
}

export const TableRowSkills: FC<TableRowSkillsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="right">{row.name}</TableCell>
    </TableRow>
  );
};
