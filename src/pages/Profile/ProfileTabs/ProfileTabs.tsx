import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Pages} from "@/models/Pages";
import {TabData} from "@/models/TabData.type";
import {TabsTemplate} from "@/components/view/TabsTemplate";

export const ProfileTabs: FC = () => {
  const navigate = useNavigate();

  const tabs: TabData[] = [
    {
      value: Pages.main.profile,
      label: "PROFILE",
      clickCallback: () => navigate(Pages.main.profile),
    },
    {
      value: Pages.main.skills,
      label: "SKILLS",
      clickCallback: () => navigate(Pages.main.skills),
    },
    {
      value: Pages.main.languages,
      label: "LANGUAGES",
      clickCallback: () => navigate(Pages.main.languages),
    },
    {
      value: Pages.main.cvs,
      label: "CVS",
      clickCallback: () => navigate(Pages.main.cvs),
    },
  ];

  return <TabsTemplate tabs={tabs} />;
};
