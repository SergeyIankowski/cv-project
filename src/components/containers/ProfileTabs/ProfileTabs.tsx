import {FC, SyntheticEvent, useLayoutEffect, useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {Pages} from "@/models/Pages";
import {useLocation, useNavigate} from "react-router-dom";

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
      <Box sx={{borderBottom: 1, borderColor: "divider"}}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab
            value={Pages.info.profile}
            label="PROFILE"
            onClick={() => navigate(Pages.info.profile)}
          />
          <Tab
            value={Pages.info.skills}
            label="SKILLS"
            onClick={() => navigate(Pages.info.skills)}
          />
          <Tab
            value={Pages.info.languages}
            label="LANGUAGES"
            onClick={() => navigate(Pages.info.languages)}
          />
          <Tab
            value={Pages.info.cvs}
            label="CVS"
            onClick={() => navigate(Pages.info.cvs)}
          />
        </Tabs>
      </Box>
    </Box>
  );
};
