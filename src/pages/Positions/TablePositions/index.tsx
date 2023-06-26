import {FC} from "react";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {TableRowPositions} from "@/pages/Positions/TableRowPositions";
import {PositionsTableData} from "@/models/TableDataTypes/PositionsTableData.interface";
import {Order} from "@/models/Order.type";
import {useSort} from "@/hooks/useSort";
import {positionsHeadCellsData} from "./positionsHeadCellsData";

interface TablePositionsProps {
  positionsData: PositionsTableData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof PositionsTableData = "name";

export const TablePositions: FC<TablePositionsProps> = ({positionsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<PositionsTableData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, positionsData);

  return (
    <TableTemplate>
      <TableHeadTemplate
        headCells={positionsHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn={false}
        titleAlign="left"
        onRequestSort={handleRequestSort}
      />
      {sortedRowsOnPage.map(position => (
        <TableRowPositions key={position.name} row={position} />
      ))}
    </TableTemplate>
  );
};
