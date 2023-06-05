import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {ProjectData} from "@/models/ProjectData.type";
import {ProjectsRowControl} from "../ProjectsRowControlMenu/ProjectsRowControl";

interface TableRowProjectsProps {
  row: ProjectData;
}

export const TableRowProjects: FC<TableRowProjectsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="left">{row.internalName}</TableCell>
      <TableCell align="left">{row.domain}</TableCell>
      <TableCell align="left">{row.startDate}</TableCell>
      <TableCell align="left">{row.endDate}</TableCell>
      <TableCell align="left">{row.teamSize}</TableCell>
      <TableCell align="left">
        <ProjectsRowControl />
      </TableCell>
    </TableRow>
  );
};
