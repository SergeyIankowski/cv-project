import {FC} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {TableEmployees} from "@containers/TableEmployees/TableEmployees";
import {UserData} from "@/models/UserData.type";
import {useEmployeesQuery} from "@/graphql/hooks/useEmployeesQuery";
import {useTableSearch} from "@/hooks/useTableSearch";

export const Employees: FC = () => {
  const {loading, data} = useEmployeesQuery();
  const {searchedData, handleSearchingData} = useTableSearch<UserData>(
    data,
    loading
  );

  return (
    <>
      <SearchInput onSearch={handleSearchingData} />
      <TableEmployees usersData={searchedData} />
    </>
  );
};
