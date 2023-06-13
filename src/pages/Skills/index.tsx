import {TableSkills} from "@/components/containers/TableSkills";
import {SearchInput} from "@/components/view/SearchInput/SearchInput";
import {useSkillsQuery} from "@/graphql/hooks/useSkillsQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {SkillsData} from "@/models/SkillsData.type";
import {FC} from "react";

export const Skills: FC = () => {
  const {skills, loading} = useSkillsQuery();
  const {searchedData, handleSearchingData} = useTableSearch<SkillsData>(
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
