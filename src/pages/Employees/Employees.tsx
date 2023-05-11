import {FC, useCallback, useState} from "react";
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
  const [searchedUsers, setSearchedUsers] = useState(usersMockData);

  const handleSearchingUsers = useCallback((value: string) => {
    const newReference = [...usersMockData];
    const usersOnMount = newReference.filter(item => {
      const stringItem = Object.values(item).toString().toLocaleLowerCase();
      const lowerCasedValue = value.toLowerCase();
      return stringItem.includes(lowerCasedValue);
    });
    setSearchedUsers(usersOnMount);
  }, []);

  return (
    <PageLayout linksData={breadCrumbs}>
      <SearchInput onSearch={handleSearchingUsers} />
      <TableEmployees usersData={searchedUsers} />
    </PageLayout>
  );
};
