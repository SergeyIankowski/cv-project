import {useQuery} from "@apollo/client";
import {POSITIONS} from "../queries";
import {useEffect, useState} from "react";

interface Position {
  name: string;
}

export const usePositionsQuery = () => {
  const [positions, setPositions] = useState([]);
  const {data, loading, error} = useQuery(POSITIONS);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setPositions(data.departments.map((item: Position) => item.name));
  }, [loading, error]);

  return {positions};
};
