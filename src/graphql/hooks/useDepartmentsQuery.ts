import {useQuery} from "@apollo/client";
import {DEPARTMENTS} from "../queries";
import {useEffect, useState} from "react";
import {FETCH_POLICY} from "../fetchPolicy";

export const useDepartmentsQuery = () => {
  const [departments, setDepartments] = useState([]);
  const {data, loading, error} = useQuery(DEPARTMENTS, {
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setDepartments(data.departments);
  }, [loading, error]);

  return {departments, loading};
};
