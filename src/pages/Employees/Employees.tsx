import {FC, useCallback, useEffect, useState} from "react";
import HomeIcon from "@mui/icons-material/Home";
import {PageLayout} from "@view/PageLayout/PageLayout";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {TableEmployees} from "@containers/TableEmployees/TableEmployees";
import {BreadCrumbsData} from "@/models/BreadCrumbsData.type";
import {Pages} from "@/models/Pages";
import {UserData} from "@/models/UserData.type";
import {useEmployeesQuery} from "@/graphql/hooks/useEmployeesQuery";
import {useBreadCrumbs} from "@/hooks/useBreadCrumbs";

// const breadCrumbs: BreadCrumbsData = [
//   {
//     text: "Home",
//     path: Pages.main,
//     icon: <HomeIcon fontSize="small" />,
//   },
//   {text: "Employees", path: Pages.employees},
// ];

export const Employees: FC = () => {
  const {loading, data} = useEmployeesQuery();
  const [searchedUsers, setSearchedUsers] = useState<UserData[]>([]);
  useEffect(() => {
    if (loading) return;
    setSearchedUsers(data);
  }, [loading, data]);

  const handleSearchingUsers = useCallback(
    (value: string) => {
      const newReference: UserData[] = [...data];
      const usersOnMount = newReference.filter(item => {
        const stringItem = Object.values(item).toString().toLocaleLowerCase();
        const lowerCasedValue = value.toLowerCase();
        return stringItem.includes(lowerCasedValue);
      });
      setSearchedUsers(usersOnMount);
    },
    [data]
  );
  return (
    <PageLayout>
      <SearchInput onSearch={handleSearchingUsers} />
      <TableEmployees usersData={searchedUsers} />
    </PageLayout>
  );
};
