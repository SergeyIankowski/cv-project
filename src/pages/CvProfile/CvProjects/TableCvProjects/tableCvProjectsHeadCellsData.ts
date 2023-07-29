import {HeadCell} from "@/models/HeadCell.type";
import {ProjectTableData} from "@/models/TableDataTypes";

export const cvProjectsHeadCellsData: (
  name: string,
  internalName: string,
  domain: string,
  startDate: string,
  endDate: string
) => HeadCell<Omit<ProjectTableData, "team_size">>[] = (
  name,
  internalName,
  domain,
  startDate,
  endDate
) => [
  {
    id: "name",
    content: name,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "internalName",
    content: internalName,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "domain",
    content: domain,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "startDate",
    content: startDate,
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "endDate",
    content: endDate,
    disablePadding: false,
    isSortable: true,
  },
];
