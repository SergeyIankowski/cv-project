import {FC} from "react";
import {TableCvs} from "@/pages/Cvs/TableCvs/TableCvs";
import {useCvsQuery} from "@/graphql/hooks/useCvsQuery";
import {PageLayoutRowContainer} from "@/components/view/PageLayoutRowContainer";
import {CreateCvModal} from "./CreateCvModal";
import {SearchInput} from "@/components/view/SearchInput/SearchInput";
import {useTableSearch} from "@/hooks/useTableSearch";
import {CvTableData} from "@/models/TableDataTypes";

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
      <TableCvs cvsData={searchedData} />;
    </>
  );
};
