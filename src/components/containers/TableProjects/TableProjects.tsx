import {FC} from "react";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {projectsHeadCellsData} from "./projectsHeadCellsData";
import {Order} from "@/models/Order.type";
import {ProjectData} from "@/models/ProjectData.type";
import {useSort} from "@/hooks/useSort";
import {TableRowProjects} from "@/components/view/TableRowProjects/TableRowProjects";

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
      {sortedRowsOnPage.map(project => (
        <TableRowProjects key={project.domain} row={project} />
      ))}
    </TableTemplate>
  );
};
