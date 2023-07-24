import {FC} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {TableLanguages} from "@/pages/Languages/TableLanguages/TableLanguages";
import {LanguagesTableData} from "@/models/TableDataTypes";
import {useLanguagesQuery} from "@/graphql/hooks/useLanguagesQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {PageLayoutRowContainer} from "@view/PageLayoutRowContainer";
import {CreateLanguageModal} from "./CreateLanguageModal";
import {AuthInfoService} from "@/services/AuthInfoService";

export const Languages: FC = () => {
  const {loading, tableLanguages} = useLanguagesQuery();
  const {searchedData, handleSearchingData} =
    useTableSearch<LanguagesTableData>(tableLanguages, loading);

  return (
    <>
      <PageLayoutRowContainer>
        <SearchInput onSearch={handleSearchingData} />
        {AuthInfoService.isAdmin() && <CreateLanguageModal />}
      </PageLayoutRowContainer>
      {loading ? (
        <ProgressSpinner />
      ) : (
        <TableLanguages languagesData={searchedData} />
      )}
    </>
  );
};
