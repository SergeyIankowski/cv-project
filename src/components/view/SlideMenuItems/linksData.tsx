import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
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
    iconNode: <RememberMeIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.cvs}`,
  },
  {
    linkName: "Departments",
    iconNode: <AccountTreeIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.departments}`,
  },
  {
    linkName: "Positions",
    iconNode: null,
  },
  {
    linkName: "Skills",
    iconNode: <PsychologyIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.skills}`,
  },
  {
    linkName: "Languages",
    iconNode: <GTranslateIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.languages}`,
  },
];
