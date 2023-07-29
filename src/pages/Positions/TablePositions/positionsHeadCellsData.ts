import {HeadCell} from "@/models/HeadCell.type";
import {PositionsTableData} from "@/models/TableDataTypes";

export const positionsHeadCellsData: (
  name: string
) => HeadCell<PositionsTableData>[] = name => [
  {
    id: "name",
    content: name,
    disablePadding: false,
    isSortable: true,
  },
];
