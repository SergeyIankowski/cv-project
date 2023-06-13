import {TableDepartments} from "@/components/containers/TableDepartments";
import {useDepartmentsQuery} from "@/graphql/hooks/useDepartmentsQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {DepartmentsData} from "@/models/DepartmentsData.type";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {FC} from "react";

export const Departments: FC = () => {
  const {loading, departments} = useDepartmentsQuery();
  const {searchedData, handleSearchingData} = useTableSearch<DepartmentsData>(
    departments,
    loading
  );
  return (
    <>
      <SearchInput onSearch={handleSearchingData} />
      <TableDepartments departmentsData={searchedData} />
    </>
  );
};
