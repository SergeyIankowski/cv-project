import {HeadCell} from "@/models/HeadCell.type";
import {PositionsData} from "@/models/PositionsData.type";

export const positionsHeadCellsData: HeadCell<PositionsData>[] = [
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
];
