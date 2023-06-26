import {Project} from "@/graphql/interfaces/Project.interface";
import {Dayjs} from "dayjs";

export interface FetchedProject {
  id: Project["id"];
  name: string;
  internal_name: string;
  description: string;
  domain: string;
  start_date: Dayjs | string;
  end_date: Dayjs | string;
  team_size: string;
}
