import {FC} from "react";
import TableBody from "@mui/material/TableBody";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableRowCvProjects} from "../TableRowCvProjects";
import {ProjectTableData} from "@/models/TableDataTypes";
import {Order} from "@/models/Order.type";
import {useSort} from "@/hooks/useSort";
import {cvProjectsHeadCellsData} from "./tableCvProjectsHeadCellsData";

interface TableCvProjectsProps {
  projectsData: ProjectTableData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof ProjectTableData = "name";

export const TableCvProjects: FC<TableCvProjectsProps> = ({projectsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<ProjectTableData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, projectsData);
  return (
    <TableTemplate>
      <TableHeadTemplate<ProjectTableData>
        headCells={cvProjectsHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn={false}
        onRequestSort={handleRequestSort}
      />
      <TableBody>
        {sortedRowsOnPage.map(project => (
          <TableRowCvProjects key={project.id} row={project} />
        ))}
      </TableBody>
    </TableTemplate>
  );
};
