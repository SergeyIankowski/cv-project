import {FC} from "react";
import TableBody from "@mui/material/TableBody";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {useSort} from "@/hooks/useSort";
import {CvData} from "@/models/CvData";
import {Order} from "@/models/Order.type";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableRowCvs} from "@/pages/Cvs/TableRowCvs/TableRowCvs";
import {cvsHeadCellsData} from "./cvsHeadCellsData";

interface TableCvsProps {
  cvsData: CvData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof CvData = "name";

export const TableCvs: FC<TableCvsProps> = ({cvsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] = useSort<CvData>(
    DEFAULT_ORDER,
    DEFAULT_ORDER_BY,
    cvsData
  );
  return (
    <TableTemplate>
      <TableHeadTemplate<CvData>
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
