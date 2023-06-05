import {CvData} from "@/models/CvData";
import {HeadCell} from "@/models/HeadCell.type";

export const cvsHeadCellsData: HeadCell<CvData>[] = [
  {
    id: "isTemplate",
    content: "Template",
    disablePadding: false,
    isSortable: false,
  },
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "description",
    content: "Description",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "userEmail",
    content: "Employee",
    disablePadding: false,
    isSortable: true,
  },
];
