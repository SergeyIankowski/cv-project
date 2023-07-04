import {FC} from "react";
import {TableProjects} from "@/pages/Projects/TableProjects/TableProjects";
import {useProjectsQuery} from "@/graphql/hooks/useProjectsQuery";
import {PageLayoutRowContainer} from "@/components/view/PageLayoutRowContainer";
import {SearchInput} from "@view/SearchInput/SearchInput";
import {useTableSearch} from "@/hooks/useTableSearch";
import {ProjectTableData} from "@/models/TableDataTypes";
import {CreateProjectModal} from "./CreateProjectModal";

export const Projects: FC = () => {
  const {tableProjects, loading} = useProjectsQuery();
  const {searchedData, handleSearchingData} = useTableSearch<ProjectTableData>(
    tableProjects,
    loading
  );

  return (
    <>
      <PageLayoutRowContainer>
        <SearchInput onSearch={handleSearchingData} />
        <CreateProjectModal />
      </PageLayoutRowContainer>
      <TableProjects projectsData={searchedData} />;
    </>
  );
};
