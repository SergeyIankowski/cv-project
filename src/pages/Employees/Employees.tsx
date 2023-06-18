import {FC} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {TableEmployees} from "@/pages/Employees/TableEmployees/TableEmployees";
import {UserData} from "@/models/UserData.type";
import {useEmployeesQuery} from "@/graphql/hooks/useEmployeesQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {PageLayoutRowContainer} from "@view/PageLayoutRowContainer";
import {AuthInfoService} from "@/services/AuthInfoService";
import {NewEmployeeModal} from "./NewEmployeeModal";

export const Employees: FC = () => {
  const {loading, data} = useEmployeesQuery();
  const {searchedData, handleSearchingData} = useTableSearch<UserData>(
    data,
    loading
  );

  return (
    <>
      <PageLayoutRowContainer>
        <SearchInput onSearch={handleSearchingData} />
        {AuthInfoService.isAdmin() && <NewEmployeeModal />}
      </PageLayoutRowContainer>

      <TableEmployees usersData={searchedData} />
    </>
  );
};
