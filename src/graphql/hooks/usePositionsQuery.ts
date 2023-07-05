import {useQuery} from "@apollo/client";
import {POSITIONS} from "../queries";
import {useEffect, useState} from "react";
import {FETCH_POLICY} from "../fetchPolicy";

export const usePositionsQuery = () => {
  const [positions, setPositions] = useState([]);
  const {data, loading, error} = useQuery(POSITIONS, {
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setPositions(data.positions);
  }, [loading, error]);

  return {positions, loading};
};
