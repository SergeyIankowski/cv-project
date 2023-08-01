import {FC} from "react";
import {useTranslation} from "react-i18next";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {SkillsTableData} from "@/models/TableDataTypes";
import {Order} from "@/models/Order.type";
import {skillsHeadCellsData} from "./skillsHeadCellsData";
import {useSort} from "@/hooks/useSort";
import {TableRowSkills} from "@/pages/Skills/TableRowSkills";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";

interface TableSkillsProps {
  skillsData: SkillsTableData[] | null;
}
const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof SkillsTableData = "name";

export const TableSkills: FC<TableSkillsProps> = ({skillsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<SkillsTableData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, skillsData);
  const {t} = useTranslation();

  if (!sortedRowsOnPage) return <ProgressSpinner />;
  return (
    <TableTemplate>
      <TableHeadTemplate
        headCells={skillsHeadCellsData(t("name"))}
        order={order}
        orderBy={orderBy}
        hasControlsColumn
        titleAlign="left"
        onRequestSort={handleRequestSort}
      />
      {sortedRowsOnPage.map(skill => (
        <TableRowSkills key={skill.name} row={skill} />
      ))}
    </TableTemplate>
  );
};
