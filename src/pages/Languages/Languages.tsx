import {FC} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {TableLanguages} from "@/pages/Languages/TableLanguages/TableLanguages";
import {LanguagesTableData} from "@/models/TableDataTypes";
import {useLanguagesQuery} from "@/graphql/hooks/useLanguagesQuery";
import {useTableSearch} from "@/hooks/useTableSearch";

export const Languages: FC = () => {
  const {loading, tableLanguages} = useLanguagesQuery();
  const {searchedData, handleSearchingData} =
    useTableSearch<LanguagesTableData>(tableLanguages, loading);

  return (
    <>
      <SearchInput onSearch={handleSearchingData} />
      <TableLanguages languagesData={searchedData} />
    </>
  );
};
