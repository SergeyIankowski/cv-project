import {FC} from "react";
import TableBody from "@mui/material/TableBody";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableRowProjects} from "@view/TableRowProjects/TableRowProjects";
import {projectsHeadCellsData} from "./projectsHeadCellsData";
import {Order} from "@/models/Order.type";
import {ProjectData} from "@/models/ProjectData.type";
import {useSort} from "@/hooks/useSort";

interface TableProjectsProps {
  projectsData: ProjectData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof ProjectData = "name";

export const TableProjects: FC<TableProjectsProps> = ({projectsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<ProjectData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, projectsData);
  return (
    <TableTemplate>
      <TableHeadTemplate<ProjectData>
        headCells={projectsHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn
        onRequestSort={handleRequestSort}
      />
      <TableBody>
        {sortedRowsOnPage.map(project => (
          <TableRowProjects key={project.domain} row={project} />
        ))}
      </TableBody>
    </TableTemplate>
  );
};
