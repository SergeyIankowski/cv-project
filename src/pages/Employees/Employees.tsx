import {FC} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {TableEmployees} from "@/pages/Employees/TableEmployees/TableEmployees";
import {UserData} from "@/models/UserData.type";
import {useEmployeesQuery} from "@/graphql/hooks/useEmployeesQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {PageLayoutRowContainer} from "@view/PageLayoutRowContainer";
import {ModalTemplate} from "@view/ModalTemplate";
import {EmployeeAddingForm} from "./EmployeeAddingForm";
import {AuthInfoService} from "@/services/AuthInfoService";

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
        {AuthInfoService.isAdmin() && (
          <ModalTemplate buttonName="Create Employee">
            <EmployeeAddingForm />
          </ModalTemplate>
        )}
      </PageLayoutRowContainer>

      <TableEmployees usersData={searchedData} />
    </>
  );
};
