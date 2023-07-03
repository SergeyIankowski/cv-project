import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Pages} from "@/models/Pages";
import {TabData} from "@/models/TabData.type";
import {TabsTemplate} from "@/components/view/TabsTemplate";

export const CvsTabs: FC = () => {
  const navigate = useNavigate();

  const tabs: TabData[] = [
    {
      value: Pages.main.details,
      label: "DETAILS",
      clickCallback: () => navigate(Pages.main.details),
    },
    {
      value: Pages.main.projects,
      label: "PROJECTS",
      clickCallback: () => navigate(Pages.main.projects),
    },
    {
      value: Pages.main.preview,
      label: "PREVIEW",
      clickCallback: () => navigate(Pages.main.preview),
    },
  ];

  return <TabsTemplate tabs={tabs} />;
};
