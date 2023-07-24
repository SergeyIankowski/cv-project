import {CvInput} from "@/graphql/interfaces/CvInput.interface";

export interface CreateCvFormFields {
  name: CvInput["name"];
  description: CvInput["description"];
  userId?: CvInput["userId"];
  is_template: CvInput["is_template"];
}
