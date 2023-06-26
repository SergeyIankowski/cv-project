import {FC} from "react";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableRowEmployees} from "@/pages/Employees/TableRowEmployees/TableRowEmployees";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {Order} from "@/models/Order.type";
import {employeesHeadCellsData} from "./employeesHeadCellsData";

import {UserTableData} from "@/models/TableDataTypes/UserTableData.interface";
import {useSort} from "@/hooks/useSort";

interface TableEmployeesProps {
  usersData: UserTableData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof UserTableData = "firstName";

export const TableEmployees: FC<TableEmployeesProps> = ({usersData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<UserTableData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, usersData);

  return (
    <TableTemplate>
      <TableHeadTemplate
        headCells={employeesHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn
        onRequestSort={handleRequestSort}
      />
      {sortedRowsOnPage.map(user => (
        <TableRowEmployees key={user.email} row={user} />
      ))}
    </TableTemplate>
  );
};
