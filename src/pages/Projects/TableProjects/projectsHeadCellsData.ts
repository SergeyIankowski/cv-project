import {HeadCell} from "@/models/HeadCell.type";
import {ProjectTableData} from "@/models/TableDataTypes";

export const projectsHeadCellsData: (
  name: string,
  internalName: string,
  domain: string,
  startDate: string,
  endDate: string,
  teamSize: string
) => HeadCell<ProjectTableData>[] = (
  name,
  internalName,
  domain,
  startDate,
  endDate,
  teamSize
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
  {
    id: "teamSize",
    content: teamSize,
    disablePadding: false,
    isSortable: true,
  },
];
