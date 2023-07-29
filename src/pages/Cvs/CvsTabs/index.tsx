import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Pages} from "@/models/Pages";
import {TabData} from "@/models/TabData.type";
import {TabsTemplate} from "@view/TabsTemplate";

export const CvsTabs: FC = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const tabs: TabData[] = [
    {
      value: Pages.main.details,
      label: t("details").toUpperCase(),
      clickCallback: () => navigate(Pages.main.details),
    },
    {
      value: Pages.main.projects,
      label: t("projects").toUpperCase(),
      clickCallback: () => navigate(Pages.main.projects),
    },
    {
      value: Pages.main.preview,
      label: t("preview").toUpperCase(),
      clickCallback: () => navigate(Pages.main.preview),
    },
  ];

  return <TabsTemplate tabs={tabs} />;
};
