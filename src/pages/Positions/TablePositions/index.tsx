import {FC} from "react";
import {useTranslation} from "react-i18next";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {TableRowPositions} from "@/pages/Positions/TableRowPositions";
import {PositionsTableData} from "@/models/TableDataTypes";
import {Order} from "@/models/Order.type";
import {useSort} from "@/hooks/useSort";
import {positionsHeadCellsData} from "./positionsHeadCellsData";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";

interface TablePositionsProps {
  positionsData: PositionsTableData[] | null;
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof PositionsTableData = "name";

export const TablePositions: FC<TablePositionsProps> = ({positionsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<PositionsTableData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, positionsData);
  const {t} = useTranslation();

  if (!sortedRowsOnPage) return <ProgressSpinner />;
  return (
    <TableTemplate>
      <TableHeadTemplate
        headCells={positionsHeadCellsData(t("name"))}
        order={order}
        orderBy={orderBy}
        hasControlsColumn
        titleAlign="left"
        onRequestSort={handleRequestSort}
      />
      {sortedRowsOnPage.map(position => (
        <TableRowPositions key={position.name} row={position} />
      ))}
    </TableTemplate>
  );
};
