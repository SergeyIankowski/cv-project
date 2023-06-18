import {CvData} from "./CvData";

export interface UpdatedCv {
  name: CvData["name"];
  description: CvData["description"];
  is_template: CvData["isTemplate"];
}
