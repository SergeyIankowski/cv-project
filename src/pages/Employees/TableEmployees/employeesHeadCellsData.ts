import {HeadCell} from "@/models/HeadCell.type";
import {UserTableData} from "@/models/TableDataTypes";

export const employeesHeadCellsData: HeadCell<UserTableData>[] = [
  {
    id: "imgPath",
    content: "",
    disablePadding: true,
    isSortable: false,
  },
  {
    id: "firstName",
    content: "First Name",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "lastName",
    content: "Last Name",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "email",
    content: "Email",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "department",
    content: "Department",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "position",
    content: "Position",
    disablePadding: false,
    isSortable: true,
  },
];
