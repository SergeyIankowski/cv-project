import {useQuery} from "@apollo/client";
import {POSITIONS} from "../queries";
import {useEffect, useState} from "react";
import {FETCH_POLICY} from "../fetchPolicy";
import {Position} from "../interfaces/Position.interface";

export const usePositionsQuery = () => {
  const [positions, setPositions] = useState<Position[] | null>(null);
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
