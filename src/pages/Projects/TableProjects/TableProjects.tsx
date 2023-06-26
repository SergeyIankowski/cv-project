import {FC} from "react";
import TableBody from "@mui/material/TableBody";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableRowProjects} from "@/pages/Projects/TableRowProjects/TableRowProjects";
import {projectsHeadCellsData} from "./projectsHeadCellsData";
import {Order} from "@/models/Order.type";
import {ProjectTableData} from "@/models/ProjectTableData.interface";
import {useSort} from "@/hooks/useSort";

interface TableProjectsProps {
  projectsData: ProjectTableData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof ProjectTableData = "name";

export const TableProjects: FC<TableProjectsProps> = ({projectsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<ProjectTableData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, projectsData);
  return (
    <TableTemplate>
      <TableHeadTemplate<ProjectTableData>
        headCells={projectsHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn
        onRequestSort={handleRequestSort}
      />
      <TableBody>
        {sortedRowsOnPage.map(project => (
          <TableRowProjects key={project.id} row={project} />
        ))}
      </TableBody>
    </TableTemplate>
  );
};
