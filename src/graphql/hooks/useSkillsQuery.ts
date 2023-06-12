import {useQuery} from "@apollo/client";
import {SKILLS} from "../queries";
import {useEffect, useState} from "react";
import {SkillsData} from "@/models/SkillsData.type";

export const useSkillsQuery = () => {
  const {data, loading, error} = useQuery(SKILLS);
  const [skills, setSkills] = useState<SkillsData[]>([]);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setSkills(data.skills);
  }, [data]);

  return {skills, loading};
};
