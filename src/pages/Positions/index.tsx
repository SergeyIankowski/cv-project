import {FC} from "react";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {usePositionsQuery} from "@/graphql/hooks/usePositionsQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {PositionsTableData} from "@/models/TableDataTypes/PositionsTableData.interface";
import {TablePositions} from "@/pages/Positions/TablePositions";

export const Positions: FC = () => {
  const {loading, positions} = usePositionsQuery();
  const {searchedData, handleSearchingData} =
    useTableSearch<PositionsTableData>(positions, loading);

  return (
    <>
      <SearchInput onSearch={handleSearchingData} />
      <TablePositions positionsData={searchedData} />
    </>
  );
};
