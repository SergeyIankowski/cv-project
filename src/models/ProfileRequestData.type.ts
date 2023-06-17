import {DepartmentsData} from "./DepartmentsData.type";
import {PositionsData} from "./PositionsData.type";

export interface ProfileRequestData {
  profile: {
    first_name: string;
    last_name: string;
  };
  departmentId: DepartmentsData["id"];
  positionId: PositionsData["id"];
}
