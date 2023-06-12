import {HeadCell} from "@/models/HeadCell.type";
import {ProjectData} from "@/models/ProjectData.type";

export const projectsHeadCellsData: HeadCell<ProjectData>[] = [
  {
    id: "name",
    content: "Name",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "internalName",
    content: "Internal Name",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "domain",
    content: "Domain",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "startDate",
    content: "Start Date",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "endDate",
    content: "End Date",
    disablePadding: false,
    isSortable: true,
  },
  {
    id: "teamSize",
    content: "Team Size",
    disablePadding: false,
    isSortable: true,
  },
];
