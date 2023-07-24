import {FC} from "react";
import {TableSkills} from "@/pages/Skills/TableSkills";
import {CreateSkillModal} from "@/pages/Skills/CreateSkillModal";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {PageLayoutRowContainer} from "@view/PageLayoutRowContainer";
import {useSkillsQuery} from "@/graphql/hooks/useSkillsQuery";
import {useTableSearch} from "@/hooks/useTableSearch";
import {SkillsTableData} from "@/models/TableDataTypes";
import {AuthInfoService} from "@/services/AuthInfoService";

export const Skills: FC = () => {
  const {skills, loading} = useSkillsQuery();
  const {searchedData, handleSearchingData} = useTableSearch<SkillsTableData>(
    skills,
    loading
  );
  return (
    <>
      <PageLayoutRowContainer>
        <SearchInput onSearch={handleSearchingData} />
        {AuthInfoService.isAdmin() && <CreateSkillModal />}
      </PageLayoutRowContainer>
      {loading ? (
        <ProgressSpinner />
      ) : (
        <TableSkills skillsData={searchedData} />
      )}
    </>
  );
};
