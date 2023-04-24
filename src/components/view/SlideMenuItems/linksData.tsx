import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import {LinksData} from "@/models/LinksData.type";

export const linksData: LinksData[] = [
  {linkName: "Employees", iconNode: <SupervisorAccountIcon />},
  {linkName: "Projects", iconNode: <HomeRepairServiceIcon />},
  {linkName: "CV's", iconNode: null},
  {linkName: "Departments", iconNode: null},
  {linkName: "Positions", iconNode: null},
  {linkName: "Skills", iconNode: null},
  {linkName: "Languages", iconNode: <GTranslateIcon />},
];
