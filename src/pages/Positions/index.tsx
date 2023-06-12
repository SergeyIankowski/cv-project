import {FC} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {usePositionsQuery} from "@/graphql/hooks/usePositionsQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {PositionsData} from "@/models/PositionsData.type";
import {TablePositions} from "@/components/containers/TablePositions";

export const Positions: FC = () => {
  const {loading, positions} = usePositionsQuery();
  const {searchedData, handleSearchingData} = useTableSearch<PositionsData>(
    positions,
    loading
  );

  return (
    <>
      <SearchInput onSearch={handleSearchingData} />
      <TablePositions positionsData={searchedData} />
    </>
  );
};
