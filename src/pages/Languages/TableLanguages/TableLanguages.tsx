import {FC} from "react";
import {useTranslation} from "react-i18next";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableRowLanguages} from "@/pages/Languages/TableRowLanguages/TableRowLanguages";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {Order} from "@/models/Order.type";
import {LanguagesTableData} from "@/models/TableDataTypes";
import {LanguagesHeadCellsData} from "./LanguagesHeadCellsData";
import {useSort} from "@/hooks/useSort";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";

interface TableLanguagesProps {
  languagesData: LanguagesTableData[] | null;
}

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof LanguagesTableData = "name";

export const TableLanguages: FC<TableLanguagesProps> = ({languagesData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<LanguagesTableData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, languagesData);
  const {t} = useTranslation();

  if (!sortedRowsOnPage) return <ProgressSpinner />;
  return (
    <TableTemplate>
      <TableHeadTemplate
        headCells={LanguagesHeadCellsData(t("name"), t("nativeName"))}
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
