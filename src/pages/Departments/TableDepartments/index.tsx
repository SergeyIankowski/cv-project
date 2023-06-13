import {FC} from "react";
import {Order} from "@/models/Order.type";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableRowDepartments} from "@/pages/Departments/TableRowDepartments";
import {useSort} from "@/hooks/useSort";
import {DepartmentsData} from "@/models/DepartmentsData.type";
import {departmentsHeadCellsData} from "./departmentsHeadCellsData";

interface TableDepartmentsProps {
  departmentsData: DepartmentsData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof DepartmentsData = "name";

export const TableDepartments: FC<TableDepartmentsProps> = ({
  departmentsData,
}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<DepartmentsData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, departmentsData);
  return (
    <TableTemplate>
      <TableHeadTemplate
        headCells={departmentsHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn={false}
        titleAlign="left"
        onRequestSort={handleRequestSort}
      />
      {sortedRowsOnPage.map(department => (
        <TableRowDepartments key={department.name} row={department} />
      ))}
    </TableTemplate>
  );
};
