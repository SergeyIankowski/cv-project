import {FC} from "react";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableRowLanguages} from "@/pages/Languages/TableRowLanguages/TableRowLanguages";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {Order} from "@/models/Order.type";
import {LanguagesTableData} from "@/models/TableDataTypes/LanguagesTableData.interface";
import {LanguagesHeadCellsData} from "./LanguagesHeadCellsData";
import {useSort} from "@/hooks/useSort";

interface TableLanguagesProps {
  languagesData: LanguagesTableData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof LanguagesTableData = "name";

export const TableLanguages: FC<TableLanguagesProps> = ({languagesData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<LanguagesTableData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, languagesData);
  return (
    <TableTemplate>
      <TableHeadTemplate
        headCells={LanguagesHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn
        onRequestSort={handleRequestSort}
      />
      {sortedRowsOnPage.map(language => (
        <TableRowLanguages key={language.name} row={language} />
      ))}
    </TableTemplate>
  );
};
