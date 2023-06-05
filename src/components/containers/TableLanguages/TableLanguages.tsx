import {FC} from "react";
import {TableHeadTemplate} from "@/components/view/TableHeadTemplate/TableHeadTemplate";
import {TableRowLanguages} from "@/components/view/TableRowLanguages/TableRowLanguages";
import {TableTemplate} from "@/components/view/TableTemplate/TableTemplate";
import {Order} from "@/models/Order.type";
import {LanguagesData} from "@/models/LanguagesData";
import {LanguagesHeadCellsData} from "./LanguagesHeadCellsData";
import {useSort} from "@/hooks/useSort";

interface TableLanguagesProps {
  languagesData: LanguagesData[];
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof LanguagesData = "name";

export const TableLanguages: FC<TableLanguagesProps> = ({languagesData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<LanguagesData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, languagesData);
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
