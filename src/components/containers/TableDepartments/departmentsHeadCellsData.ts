import {DepartmentsData} from "@/models/DepartmentsData.type";
import {HeadCell} from "@/models/HeadCell.type";

export const departmentsHeadCellsData: HeadCell<DepartmentsData>[] = [
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
];
