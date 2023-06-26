import {FC} from "react";
import {TableDepartments} from "@/pages/Departments/TableDepartments";
import {useDepartmentsQuery} from "@/graphql/hooks/useDepartmentsQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {DepartmentsTableData} from "@/models/TableDataTypes";
import {SearchInput} from "@view/SearchInput/SearchInput";

export const Departments: FC = () => {
  const {loading, departments} = useDepartmentsQuery();
  const {searchedData, handleSearchingData} =
    useTableSearch<DepartmentsTableData>(departments, loading);
  return (
    <>
      <SearchInput onSearch={handleSearchingData} />
      <TableDepartments departmentsData={searchedData} />
    </>
  );
};
