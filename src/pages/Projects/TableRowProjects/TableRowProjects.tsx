import {FC} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {ProjectTableData} from "@/models/ProjectTableData.interface";
import {ProjectsRowControl} from "@/pages/Projects/ProjectsRowControlMenu/ProjectsRowControl";
import {EmptyFieldStrings} from "@/models/emptyFieldsStrings";

interface TableRowProjectsProps {
  row: ProjectTableData;
}

export const TableRowProjects: FC<TableRowProjectsProps> = ({row}) => {
  return (
    <TableRow>
      <TableCell align="right">{row.name}</TableCell>
      <TableCell align="right">{row.internalName}</TableCell>
      <TableCell align="right">{row.domain}</TableCell>
      <TableCell align="right">{row.startDate}</TableCell>
      <TableCell align="right">
        {row.endDate || EmptyFieldStrings.tillNow}
      </TableCell>
      <TableCell align="right">{row.teamSize}</TableCell>
      <TableCell align="right">
        <ProjectsRowControl id={row.id} />
      </TableCell>
    </TableRow>
  );
};
