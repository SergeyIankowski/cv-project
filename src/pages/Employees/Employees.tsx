import {FC, useCallback, useEffect, useState} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {TableEmployees} from "@containers/TableEmployees/TableEmployees";
import {UserData} from "@/models/UserData.type";
import {useEmployeesQuery} from "@/graphql/hooks/useEmployeesQuery";

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
    <>
      <SearchInput onSearch={handleSearchingUsers} />
      <TableEmployees usersData={searchedUsers} />
    </>
  );
};
