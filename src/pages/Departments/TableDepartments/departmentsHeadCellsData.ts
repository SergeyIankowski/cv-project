import {DepartmentsTableData} from "@/models/DepartmentsTableData.interface";
import {HeadCell} from "@/models/HeadCell.type";

export const departmentsHeadCellsData: HeadCell<DepartmentsTableData>[] = [
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
];
