import {useQuery} from "@apollo/client";
import {DEPARTMENTS} from "../queries";
import {useEffect, useState} from "react";

interface Department {
  name: string;
}

export const useDepartmentsQuery = () => {
  const [departments, setDepartments] = useState([]);
  const {data, loading, error} = useQuery(DEPARTMENTS);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setDepartments(data.departments.map((item: Department) => item.name));
  }, [loading, error]);

  return {departments};
};
