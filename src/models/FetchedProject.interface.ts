import {Project} from "@/graphql/interfaces/Project.interface";
import {Dayjs} from "dayjs";

export interface FetchedProject {
  id: Project["id"];
  name: Project["name"];
  internal_name: Project["internal_name"];
  description: Project["description"];
  domain: Project["domain"];
  start_date: Dayjs | Project["start_date"];
  end_date: Dayjs | Project["end_date"];
  team_size: Project["team_size"];
}
