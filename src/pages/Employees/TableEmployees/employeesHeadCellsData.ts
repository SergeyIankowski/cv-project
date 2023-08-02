import {HeadCell} from "@/models/HeadCell.type";
import {UserTableData} from "@/models/TableDataTypes";

export const employeesHeadCellsData: (
  firstName: string,
  lastName: string,
  email: string,
  department: string,
  position: string
) => HeadCell<UserTableData>[] = (
  firstName,
  lastName,
  email,
  department,
  position
) => [
  {
    id: "imgPath",
    content: "",
    disablePadding: true,
    isSortable: false,
  },
  {
    id: "firstName",
    content: firstName,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "lastName",
    content: lastName,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "email",
    content: email,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "department",
    content: department,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "position",
    content: position,
    disablePadding: false,
    isSortable: true,
  },
];
