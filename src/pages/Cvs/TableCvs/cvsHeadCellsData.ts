import {CvTableData} from "@/models/TableDataTypes";
import {HeadCell} from "@/models/HeadCell.type";

export const cvsHeadCellsData: (
  isTemplate: string,
  name: string,
  description: string,
  employee: string,
  projects: string
) => HeadCell<CvTableData>[] = (
  template,
  name,
  description,
  employee,
  projects
) => [
  {
    id: "isTemplate",
    content: template,
    disablePadding: false,
    isSortable: false,
  },
  {
    id: "name",
    content: name,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "description",
    content: description,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "userEmail",
    content: employee,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "projects",
    content: projects,
    disablePadding: false,
    isSortable: false,
  },
];
