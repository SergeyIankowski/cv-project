import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import {LinksData} from "@/models/LinksData.type";
import {Pages} from "@/models/Pages";

export const linksData: (
  employees: string,
  projects: string,
  cvs: string,
  departments: string,
  positions: string,
  skills: string,
  languages: string
) => LinksData[] = (
  employees,
  projects,
  cvs,
  departments,
  positions,
  skills,
  languages
) => [
  {
    linkName: employees,
    iconNode: <SupervisorAccountIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.employees}`,
  },
  {
    linkName: projects,
    iconNode: <HomeRepairServiceIcon />,
    pathToRouting: `/${Pages.main.projects}`,
  },
  {
    linkName: cvs,
    iconNode: <RememberMeIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.cvs}`,
  },
  {
    linkName: departments,
    iconNode: <AccountTreeIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.departments}`,
  },
  {
    linkName: positions,
    iconNode: <CoPresentIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.positions}`,
  },
  {
    linkName: skills,
    iconNode: <PsychologyIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.skills}`,
  },
  {
    linkName: languages,
    iconNode: <GTranslateIcon />,
    pathToRouting: `${Pages.main.root}${Pages.main.languages}`,
  },
];
