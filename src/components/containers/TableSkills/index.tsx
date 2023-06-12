import {FC} from "react";
import {TableHeadTemplate} from "@view/TableHeadTemplate/TableHeadTemplate";
import {TableTemplate} from "@view/TableTemplate/TableTemplate";
import {SkillsData} from "@/models/SkillsData.type";
import {Order} from "@/models/Order.type";
import {skillsHeadCellsData} from "./skillsHeadCellsData";
import {useSort} from "@/hooks/useSort";
import {TableRowSkills} from "@/components/view/TableRowSkills";

interface TableSkillsProps {
  skillsData: SkillsData[];
}
const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDER_BY: keyof SkillsData = "name";

export const TableSkills: FC<TableSkillsProps> = ({skillsData}) => {
  const [order, orderBy, sortedRowsOnPage, handleRequestSort] =
    useSort<SkillsData>(DEFAULT_ORDER, DEFAULT_ORDER_BY, skillsData);
  return (
    <TableTemplate>
      <TableHeadTemplate
        headCells={skillsHeadCellsData}
        order={order}
        orderBy={orderBy}
        hasControlsColumn={false}
        onRequestSort={handleRequestSort}
      />
      {sortedRowsOnPage.map(skill => (
        <TableRowSkills key={skill.name} row={skill} />
      ))}
    </TableTemplate>
  );
};
