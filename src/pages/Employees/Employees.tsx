import {FC, useState} from "react";
import HomeIcon from "@mui/icons-material/Home";
import {PageLayout} from "@/components/view/PageLayout/PageLayout";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import {Pages} from "@/models/Pages";

import {SearchInput} from "@/components/view/SearchInput/SearchInput";
import {TableEmployees} from "@/components/containers/TableEmployees/TableEmployees";
import {usersMockData} from "./usersMockData";

const breadCrumbs: BreadCrumbsData = [
  {
    text: "Home",
    path: Pages.main,
    icon: <HomeIcon fontSize="small" />,
  },
  {text: "Employees", path: Pages.employees},
];

export const Employees: FC = () => {
  const [users, setUsers] = useState(usersMockData);
  return (
    <PageLayout linksData={breadCrumbs}>
      <SearchInput onSearch={value => console.log(value)} />
      <TableEmployees usersData={users} />
    </PageLayout>
  );
};
