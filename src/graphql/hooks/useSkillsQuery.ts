import {useQuery} from "@apollo/client";
import {SKILLS} from "../queries";
import {useEffect, useState} from "react";
import {SkillsTableData} from "@/models/TableDataTypes";

export const useSkillsQuery = () => {
  const {data, loading, error} = useQuery(SKILLS);
  const [skills, setSkills] = useState<SkillsTableData[]>([]);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setSkills(data.skills);
  }, [data]);

  return {skills, loading};
};
