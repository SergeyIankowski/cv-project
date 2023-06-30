import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {SKILLS} from "../queries";
import {Skill} from "../interfaces/Skill.interface";

export const useSkillsQuery = () => {
  const {data, loading, error} = useQuery(SKILLS);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setSkills(data.skills);
  }, [data]);

  return {skills, loading};
};
