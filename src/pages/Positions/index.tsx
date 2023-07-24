import {FC} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {usePositionsQuery} from "@/graphql/hooks/usePositionsQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {PositionsTableData} from "@/models/TableDataTypes";
import {TablePositions} from "@/pages/Positions/TablePositions";
import {PageLayoutRowContainer} from "@/components/view/PageLayoutRowContainer";
import {CreatePositionModal} from "./CreatePositionModal";
import {AuthInfoService} from "@/services/AuthInfoService";

export const Positions: FC = () => {
  const {loading, positions} = usePositionsQuery();
  const {searchedData, handleSearchingData} =
    useTableSearch<PositionsTableData>(positions, loading);

  return (
    <>
      <PageLayoutRowContainer>
        <SearchInput onSearch={handleSearchingData} />
        {AuthInfoService.isAdmin() && <CreatePositionModal />}
      </PageLayoutRowContainer>
      <TablePositions positionsData={searchedData} />
    </>
  );
};
