import {FC} from "react";
import {useNavigate} from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {Pages} from "@/models/Pages";
import {TabStyle} from "./ProfileTabsStyle";
import {useTabsLinksHighlighting} from "@/hooks/useTabsLinksHighlighting";

export const ProfileTabs: FC = () => {
  const [value, handleChange] = useTabsLinksHighlighting(Pages.main.profile);
  const navigate = useNavigate();
  return (
    <Box sx={{width: "100%"}}>
      <Box sx={{borderBottom: 1, borderColor: "divider", color: "green"}}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab
            value={Pages.main.profile}
            label="PROFILE"
            sx={TabStyle}
            onClick={() => navigate(Pages.main.profile)}
          />
          <Tab
            value={Pages.main.skills}
            label="SKILLS"
            sx={TabStyle}
            onClick={() => navigate(Pages.main.skills)}
          />
          <Tab
            value={Pages.main.languages}
            label="LANGUAGES"
            sx={TabStyle}
            onClick={() => navigate(Pages.main.languages)}
          />
          <Tab
            value={Pages.main.cvs}
            label="CVS"
            sx={TabStyle}
            onClick={() => navigate(Pages.main.cvs)}
          />
        </Tabs>
      </Box>
    </Box>
  );
};
