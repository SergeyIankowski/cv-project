import {FC, useCallback, useEffect, useState} from "react";
import HomeIcon from "@mui/icons-material/Home";
import {PageLayout} from "@/components/view/PageLayout/PageLayout";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import {Pages} from "@/models/Pages";

import {SearchInput} from "@/components/view/SearchInput/SearchInput";
import {TableEmployees} from "@/components/containers/TableEmployees/TableEmployees";
import {useEmployeesQuery} from "@/graphql/hooks/useEmployeesQuery";
import {UserData} from "@/models/UserData.type";

const breadCrumbs: BreadCrumbsData = [
  {
    text: "Home",
    path: Pages.main,
    icon: <HomeIcon fontSize="small" />,
  },
  {text: "Employees", path: Pages.employees},
];

export const Employees: FC = () => {
  const {loading, data} = useEmployeesQuery();
  const [searchedUsers, setSearchedUsers] = useState<UserData[]>([]);
  useEffect(() => {
    if (loading) return;
    setSearchedUsers(data);
  });

  const handleSearchingUsers = useCallback((value: string) => {
    const newReference: UserData[] = [...data];
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
