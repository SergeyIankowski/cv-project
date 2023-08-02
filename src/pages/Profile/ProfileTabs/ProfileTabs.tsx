import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Pages} from "@/models/Pages";
import {TabData} from "@/models/TabData.type";
import {TabsTemplate} from "@view/TabsTemplate";

export const ProfileTabs: FC = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const tabs: TabData[] = [
    {
      value: Pages.main.profile,
      label: t("profile").toUpperCase(),
      clickCallback: () => navigate(Pages.main.profile),
    },
    {
      value: Pages.main.skills,
      label: t("skills").toUpperCase(),
      clickCallback: () => navigate(Pages.main.skills),
    },
    {
      value: Pages.main.languages,
      label: t("languages").toUpperCase(),
      clickCallback: () => navigate(Pages.main.languages),
    },
    {
      value: Pages.main.cvs,
      label: t("cvs").toUpperCase(),
      clickCallback: () => navigate(Pages.main.cvs),
    },
  ];

  return <TabsTemplate tabs={tabs} />;
};
