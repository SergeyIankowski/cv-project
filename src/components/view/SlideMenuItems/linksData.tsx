import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import {ReactNode} from "react";

interface LinksData {
  linkName: string;
  node: ReactNode | null;
}

export const linksData: LinksData[] = [
  {linkName: "Employees", node: <SupervisorAccountIcon />},
  {linkName: "Projects", node: <HomeRepairServiceIcon />},
  {linkName: "CV's", node: null},
  {linkName: "Departments", node: null},
  {linkName: "Positions", node: null},
  {linkName: "Skills", node: null},
  {linkName: "Languages", node: <GTranslateIcon />},
];
