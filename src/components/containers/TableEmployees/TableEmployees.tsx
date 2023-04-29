import {FC} from "react";
import {TableHeadTemplate} from "@/components/view/TableHeadTemplate/TableHeadTemplate";
import {TableRowEmployees} from "@/components/view/TableRowEmployees/TableRowEmployees";
import {TableTemplate} from "@/components/view/TableTemplate/TableTemplate";
import {Order} from "@/models/Order.type";
import {employeesHeadCellsData} from "./employeesHeadCellsData";

import {UserData} from "@/models/UserData.type";
import {useSort} from "@/hooks/useSort";

interface TableEmployeesProps {
  usersData: UserData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof UserData = "firstName";

export const TableEmployees: FC<TableEmployeesProps> = ({usersData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<UserData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, usersData);

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
