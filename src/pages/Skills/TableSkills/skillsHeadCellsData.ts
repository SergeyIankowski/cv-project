import {HeadCell} from "@/models/HeadCell.type";
import {SkillsData} from "@/models/SkillsData.type";

export const skillsHeadCellsData: HeadCell<SkillsData>[] = [
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
];
