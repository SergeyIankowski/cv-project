import {FC} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {TabStyle} from "./tabStyle";
import {useTabsLinksHighlighting} from "@/hooks/useTabsLinksHighlighting";
import {TabData} from "@/models/TabData.type";

interface TabsTemplateProps {
  tabs: TabData[];
}

export const TabsTemplate: FC<TabsTemplateProps> = ({tabs}) => {
  const [value, handleChange] = useTabsLinksHighlighting(tabs[0].label);
  return (
    <Box sx={{width: "100%"}}>
      <Box sx={{borderBottom: 1, borderColor: "divider", color: "green"}}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          {tabs.map(tab => (
            <Tab
              key={tab.label}
              value={tab.value}
              label={tab.label}
              sx={TabStyle}
              onClick={tab.clickCallback}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};
