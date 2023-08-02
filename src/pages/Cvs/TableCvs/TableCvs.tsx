import {FC} from "react";
import {useTranslation} from "react-i18next";
import TableBody from "@mui/material/TableBody";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {useSort} from "@/hooks/useSort";
import {CvTableData} from "@/models/TableDataTypes";
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
  const {t} = useTranslation();
  return (
    <TableTemplate>
      <TableHeadTemplate<CvTableData>
        headCells={cvsHeadCellsData(
          t("template"),
          t("name"),
          t("description"),
          t("employee"),
          t("projects")
        )}
        order={order}
        orderBy={orderBy}
        hasControlsColumn
        onRequestSort={handleRequestSort}
      />
      <TableBody>
        {sortedRowsOnPage.map(cv => (
          <TableRowCvs key={cv.id} row={cv} />
        ))}
      </TableBody>
    </TableTemplate>
  );
};
