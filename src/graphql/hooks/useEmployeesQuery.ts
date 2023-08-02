import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {USERS} from "../queries";
import {FETCH_POLICY} from "../fetchPolicy";
import {convertUsersDataToTableData} from "@/utils/convertUsersDataToTableData";
import {UserTableData} from "@/models/TableDataTypes";
import {User} from "../interfaces/User.interface";

export const useEmployeesQuery = () => {
  const [usersForTable, setUsersForTable] = useState<UserTableData[] | null>(
    null
  );
  const [users, setUsers] = useState<User[]>([]);
  const {loading, data, error} = useQuery(USERS, {
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setUsersForTable(convertUsersDataToTableData(data.users));
    setUsers(data.users);
  }, [loading, data]);

  return {
    loading,
    users,
    usersForTable,
  };
};
