import {HeadCell} from "@/models/HeadCell.type";
import {SkillsTableData} from "@/models/TableDataTypes";

export const skillsHeadCellsData: (
  name: string
) => HeadCell<SkillsTableData>[] = name => [
  {
    id: "name",
    content: name,
    disablePadding: false,
    isSortable: true,
  },
];
