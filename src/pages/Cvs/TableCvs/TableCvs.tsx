import {FC} from "react";
import TableBody from "@mui/material/TableBody";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {useSort} from "@/hooks/useSort";
import {CvTableData} from "@/models/TableDataTypes/CvTableData.interface";
import {Order} from "@/models/Order.type";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableRowCvs} from "@/pages/Cvs/TableRowCvs/TableRowCvs";
import {cvsHeadCellsData} from "./cvsHeadCellsData";

interface TableCvsProps {
  cvsData: CvTableData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof CvTableData = "name";

export const TableCvs: FC<TableCvsProps> = ({cvsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<CvTableData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, cvsData);
  return (
    <TableTemplate>
      <TableHeadTemplate<CvTableData>
        headCells={cvsHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn
        onRequestSort={handleRequestSort}
      />
      <TableBody>
        {sortedRowsOnPage.map(cv => (
          <TableRowCvs key={cv.name} row={cv} />
        ))}
      </TableBody>
    </TableTemplate>
  );
};
