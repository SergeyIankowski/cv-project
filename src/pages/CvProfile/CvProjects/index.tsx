import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useCvQuery} from "@/graphql/hooks/useCvQuery";
import {TableCvProjects} from "./TableCvProjects";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {useTableSearch} from "@/hooks/useTableSearch";
import {ProjectTableData} from "@/models/TableDataTypes";
import {PageLayoutRowContainer} from "@/components/view/PageLayoutRowContainer";
import {SearchInput} from "@/components/view/SearchInput/SearchInput";
import {CvProjectsModal} from "@/pages/CvProfile/CvProjects/CvProjectsModal";
import {AuthInfoService} from "@/services/AuthInfoService";

export const CvProjects: FC = () => {
  const {id} = useParams();
  const {loadCv, tableCvProjects, cvData, loading} = useCvQuery();
  const {searchedData, handleSearchingData} = useTableSearch<ProjectTableData>(
    tableCvProjects,
    loading
  );

  useEffect(() => {
    loadCv(id!);
  }, []);

  if (loading) return <ProgressSpinner />;
  return (
    <>
      <PageLayoutRowContainer>
        <SearchInput onSearch={handleSearchingData} />
        {AuthInfoService.isAdmin() ||
        AuthInfoService.isAuthorizedUser(cvData?.user?.id || "") ? (
          <CvProjectsModal />
        ) : (
          ""
        )}
      </PageLayoutRowContainer>
      <TableCvProjects projectsData={searchedData} />
    </>
  );
};
