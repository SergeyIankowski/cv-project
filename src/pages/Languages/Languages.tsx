import {FC} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {TableLanguages} from "@containers/TableLanguages/TableLanguages";
import {LanguagesData} from "@/models/LanguagesData";
import {useLanguagesQuery} from "@/graphql/hooks/useLanguagesQuery";
import {useTableSearch} from "@/hooks/useTableSearch";

export const Languages: FC = () => {
  const {loading, data} = useLanguagesQuery();
  const {searchedData, handleSearchingData} = useTableSearch<LanguagesData>(
    data,
    loading
  );

  return (
    <>
      <SearchInput onSearch={handleSearchingData} />
      <TableLanguages languagesData={searchedData} />
    </>
  );
};
