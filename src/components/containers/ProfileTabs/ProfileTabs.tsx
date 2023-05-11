import {FC, SyntheticEvent, useLayoutEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {Pages} from "@/models/Pages";
import {TabStyle} from "./ProfileTabsStyle";

export const ProfileTabs: FC = () => {
  const [value, setValue] = useState(Pages.info.profile);
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    const endOfPath = location.pathname.split("/");
    setValue(endOfPath[endOfPath.length - 1]);
  }, []);

  const handleChange = (
    e: SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setValue(newValue);
  };
  return (
    <Box sx={{width: "100%"}}>
      <Box sx={{borderBottom: 1, borderColor: "divider", color: "green"}}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab
            value={Pages.info.profile}
            label="PROFILE"
            sx={TabStyle}
            onClick={() => navigate(Pages.info.profile)}
          />
          <Tab
            value={Pages.info.skills}
            label="SKILLS"
            sx={TabStyle}
            onClick={() => navigate(Pages.info.skills)}
          />
          <Tab
            value={Pages.info.languages}
            label="LANGUAGES"
            sx={TabStyle}
            onClick={() => navigate(Pages.info.languages)}
          />
          <Tab
            value={Pages.info.cvs}
            label="CVS"
            sx={TabStyle}
            onClick={() => navigate(Pages.info.cvs)}
          />
        </Tabs>
      </Box>
    </Box>
  );
};
