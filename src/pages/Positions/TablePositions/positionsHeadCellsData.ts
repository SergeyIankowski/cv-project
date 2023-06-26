import {HeadCell} from "@/models/HeadCell.type";
import {PositionsTableData} from "@/models/TableDataTypes/PositionsTableData.interface";

export const positionsHeadCellsData: HeadCell<PositionsTableData>[] = [
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
];
