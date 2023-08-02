import {DepartmentsTableData} from "@/models/TableDataTypes";
import {HeadCell} from "@/models/HeadCell.type";

export const departmentsHeadCellsData: (
  name: string
) => HeadCell<DepartmentsTableData>[] = name => [
  {
    id: "name",
    content: name,
    disablePadding: false,
    isSortable: true,
  },
];
