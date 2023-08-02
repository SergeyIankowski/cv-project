import {FC} from "react";
import {TableProjects} from "@/pages/Projects/TableProjects/TableProjects";
import {useProjectsQuery} from "@/graphql/hooks/useProjectsQuery";
import {PageLayoutRowContainer} from "@view/PageLayoutRowContainer";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {useTableSearch} from "@/hooks/useTableSearch";
import {ProjectTableData} from "@/models/TableDataTypes";
import {CreateProjectModal} from "./CreateProjectModal";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {AuthInfoService} from "@/services/AuthInfoService";

export const Projects: FC = () => {
  const {tableProjects, loading} = useProjectsQuery();
  const {searchedData, handleSearchingData} = useTableSearch<ProjectTableData>(
    tableProjects,
    loading
  );
  if (loading) return <ProgressSpinner />;
  return (
    <>
      <PageLayoutRowContainer>
        <SearchInput onSearch={handleSearchingData} />
        {AuthInfoService.isAdmin() && <CreateProjectModal />}
      </PageLayoutRowContainer>
      <TableProjects projectsData={searchedData} />
    </>
  );
};
