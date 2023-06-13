import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {ProjectData} from "@/models/ProjectData.type";
import {ProjectsRowControl} from "@/pages/Projects/ProjectsRowControlMenu/ProjectsRowControl";

interface TableRowProjectsProps {
  row: ProjectData;
}

export const TableRowProjects: FC<TableRowProjectsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="right">{row.name}</TableCell>
      <TableCell align="right">{row.internalName}</TableCell>
      <TableCell align="right">{row.domain}</TableCell>
      <TableCell align="right">{row.startDate}</TableCell>
      <TableCell align="right">{row.endDate}</TableCell>
      <TableCell align="right">{row.teamSize}</TableCell>
      <TableCell align="right">
        <ProjectsRowControl />
      </TableCell>
    </TableRow>
  );
};
