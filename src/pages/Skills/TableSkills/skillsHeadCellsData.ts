import {HeadCell} from "@/models/HeadCell.type";
import {SkillsTableData} from "@/models/TableDataTypes/SkillsTableData.interface";

export const skillsHeadCellsData: HeadCell<SkillsTableData>[] = [
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
];
