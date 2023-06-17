import {CvData} from "@/models/CvData";
import {HeadCell} from "@/models/HeadCell.type";

export const profileCvsHeadCellsData: HeadCell<CvData>[] = [
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
];
