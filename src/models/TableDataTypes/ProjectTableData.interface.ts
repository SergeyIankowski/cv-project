import {Project} from "@/graphql/interfaces/Project.interface";

export interface ProjectTableData {
  id: Project["id"];
  name: Project["name"];
  internalName: Project["internal_name"];
  domain: Project["domain"];
  startDate: Project["start_date"];
  endDate: Project["end_date"];
  teamSize: Project["team_size"];
}
