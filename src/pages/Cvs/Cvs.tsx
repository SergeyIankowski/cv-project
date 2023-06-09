import {FC} from "react";
import {TableCvs} from "@/pages/Cvs/TableCvs/TableCvs";
import {useCvsQuery} from "@/graphql/hooks/useCvsQuery";
import {PageLayoutRowContainer} from "@view/PageLayoutRowContainer";
import {CreateCvModal} from "./CreateCvModal";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {useTableSearch} from "@/hooks/useTableSearch";
import {CvTableData} from "@/models/TableDataTypes";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";

export const Cvs: FC = () => {
  const {tableCvs, loading} = useCvsQuery();
  const {searchedData, handleSearchingData} = useTableSearch<CvTableData>(
    tableCvs,
    loading
  );

  return (
    <>
      <PageLayoutRowContainer>
        <SearchInput onSearch={handleSearchingData} />
        <CreateCvModal />
      </PageLayoutRowContainer>
      {loading ? <ProgressSpinner /> : <TableCvs cvsData={searchedData} />}
    </>
  );
};
