import {HeadCell} from "@/models/HeadCell.type";
import {PositionsTableData} from "@/models/PositionsTableData.interface";

export const positionsHeadCellsData: HeadCell<PositionsTableData>[] = [
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
];
