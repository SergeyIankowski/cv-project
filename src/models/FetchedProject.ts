import {Dayjs} from "dayjs";

export interface FetchedProject {
  id: string;
  name: string;
  internal_name: string;
  description: string;
  domain: string;
  start_date: Dayjs | string;
  end_date: Dayjs | string;
  team_size: string;
}
