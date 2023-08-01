import {FC} from "react";
import {Order} from "@/models/Order.type";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableRowDepartments} from "@/pages/Departments/TableRowDepartments";
import {useSort} from "@/hooks/useSort";
import {DepartmentsTableData} from "@/models/TableDataTypes";
import {departmentsHeadCellsData} from "./departmentsHeadCellsData";
import {useTranslation} from "react-i18next";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";

interface TableDepartmentsProps {
  departmentsData: DepartmentsTableData[] | null;
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof DepartmentsTableData = "name";

export const TableDepartments: FC<TableDepartmentsProps> = ({
  departmentsData,
}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<DepartmentsTableData>(
      DEFAULT_ORDER,
      DEFAULT_ORDER_BY,
      departmentsData
    );
  const {t} = useTranslation();

  if (!sortedRowsOnPage) return <ProgressSpinner />;
  return (
    <TableTemplate>
      <TableHeadTemplate
        headCells={departmentsHeadCellsData(t("name"))}
        order={order}
        orderBy={orderBy}
        hasControlsColumn
        titleAlign="left"
        onRequestSort={handleRequestSort}
      />
      {sortedRowsOnPage.map(department => (
        <TableRowDepartments key={department.name} row={department} />
      ))}
    </TableTemplate>
  );
};
