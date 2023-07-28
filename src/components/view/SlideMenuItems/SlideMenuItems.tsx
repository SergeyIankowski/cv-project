import {FC} from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import {linksData} from "./linksData";
import {ListLinks} from "@view/ListLinks/ListLinks";
import {useTranslation} from "react-i18next";

export const SlideMenuItems: FC = () => {
  const {t} = useTranslation();
  return (
    <Box sx={{width: 250}} role="presentation">
      <List>
        <ListLinks
          linksData={linksData(
            t("employees"),
            t("projects"),
            t("cvs"),
            t("departments"),
            t("positions"),
            t("skills"),
            t("languages")
          ).slice(0, 3)}
        />
      </List>
      <Divider />
      <List>
        <ListLinks
          linksData={linksData(
            t("employees"),
            t("projects"),
            t("cvs"),
            t("departments"),
            t("positions"),
            t("skills"),
            t("languages")
          ).slice(3)}
        />
      </List>
    </Box>
  );
};
