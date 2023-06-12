import {FC} from "react";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {TableRowPositions} from "@/pages/Positions/TableRowPositions";
import {PositionsData} from "@/models/PositionsData.type";
import {Order} from "@/models/Order.type";
import {useSort} from "@/hooks/useSort";
import {positionsHeadCellsData} from "./positionsHeadCellsData";

interface TablePositionsProps {
  positionsData: PositionsData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof PositionsData = "name";

export const TablePositions: FC<TablePositionsProps> = ({positionsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<PositionsData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, positionsData);

  return (
    <TableTemplate>
      <TableHeadTemplate
        headCells={positionsHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn={false}
        onRequestSort={handleRequestSort}
      />
      {sortedRowsOnPage.map(position => (
        <TableRowPositions key={position.name} row={position} />
      ))}
    </TableTemplate>
  );
};
