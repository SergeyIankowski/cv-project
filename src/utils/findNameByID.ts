import {Language} from "@/graphql/interfaces/Language.interface";
import {Skill} from "@/graphql/interfaces/Skill.interface";
import {Project} from "@/graphql/interfaces/Project.interface";
import {ID} from "@/graphql/interfaces/ID.type";

type Fields = Skill[] | Language[] | Project[];

export const findNameByID = (fields: Fields, id: ID) => {
  const field = fields.find(field => field.id === id);
  return field?.name;
};
