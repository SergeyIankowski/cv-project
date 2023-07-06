import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {SkillsTableData} from "@/models/TableDataTypes";
import {SkillsRowControlMenu} from "../SkillsRowControlMenu";
import {UpdateSkillModal} from "../UpdateSkillModal";

interface TableRowSkillsProps {
  row: SkillsTableData;
}

export const TableRowSkills: FC<TableRowSkillsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="right">
        <UpdateSkillModal id={row.id} name={row.name}>
          <SkillsRowControlMenu id={row.id} />
        </UpdateSkillModal>
      </TableCell>
    </TableRow>
  );
};
