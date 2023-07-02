import {FC} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {TableEmployees} from "@/pages/Employees/TableEmployees/TableEmployees";
import {UserTableData} from "@/models/TableDataTypes";
import {useEmployeesQuery} from "@/graphql/hooks/useEmployeesQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {PageLayoutRowContainer} from "@view/PageLayoutRowContainer";
import {AuthInfoService} from "@/services/AuthInfoService";
import {NewEmployeeModal} from "./NewEmployeeModal";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";

export const Employees: FC = () => {
  const {loading, usersForTable} = useEmployeesQuery();
  const {searchedData, handleSearchingData} = useTableSearch<UserTableData>(
    usersForTable,
    loading
  );

  return (
    <>
      <PageLayoutRowContainer>
        <SearchInput onSearch={handleSearchingData} />
        {AuthInfoService.isAdmin() && <NewEmployeeModal />}
      </PageLayoutRowContainer>

      {loading ? (
        <ProgressSpinner />
      ) : (
        <TableEmployees usersData={searchedData} />
      )}
    </>
  );
};
