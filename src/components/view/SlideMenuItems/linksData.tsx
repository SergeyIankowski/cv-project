import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import {LinksData} from "@/models/LinksData.type";
import {Pages} from "@/models/Pages";

export const linksData: LinksData[] = [
  {
    linkName: "Employees",
    iconNode: <SupervisorAccountIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.employees}`,
  },
  {
    linkName: "Projects",
    iconNode: <HomeRepairServiceIcon />,
    pathToRouting: `/${Pages.main.projects}`,
  },
  {
    linkName: "CV's",
    iconNode: null,
    pathToRouting: `${Pages.main.root}${Pages.main.cvs}`,
  },
  {
    linkName: "Departments",
    iconNode: null,
  },
  {
    linkName: "Positions",
    iconNode: <CoPresentIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.positions}`,
  },
  {
    linkName: "Skills",
    iconNode: null,
  },
  {
    linkName: "Languages",
    iconNode: <GTranslateIcon />,
  },
];
