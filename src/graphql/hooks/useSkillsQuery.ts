import {useQuery} from "@apollo/client";
import {SKILLS} from "../queries";

export const useSkillsQuery = () => {
  const {data, loading} = useQuery(SKILLS);
  return {skills: data, loading};
};
