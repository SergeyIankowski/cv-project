import {TableSkills} from "@/pages/Skills/TableSkills";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {useSkillsQuery} from "@/graphql/hooks/useSkillsQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {SkillsTableData} from "@/models/TableDataTypes";
import {FC} from "react";

export const Skills: FC = () => {
  const {skills, loading} = useSkillsQuery();
  const {searchedData, handleSearchingData} = useTableSearch<SkillsTableData>(
    skills,
    loading
  );
  return (
    <>
      <SearchInput onSearch={handleSearchingData} />
      <TableSkills skillsData={searchedData} />
    </>
  );
};
