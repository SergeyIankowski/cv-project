import {useQuery} from "@apollo/client";
import {CV} from "../queries";
import {useEffect, useState} from "react";
import {Cv} from "../interfaces/Cv.interface";
import {FETCH_POLICY} from "../fetchPolicy";

const initial: Pick<Cv, "id" | "name" | "description" | "is_template"> = {
  id: "",
  name: "",
  description: "",
  is_template: false,
};

export const useCvQuery = (id: Cv["id"]) => {
  const {data, loading, error} = useQuery(CV, {
    variables: {id},
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });
  const [responseData, setResponceData] = useState(initial);

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setResponceData(data.cv);
  }, [loading, data]);

  return {cv: responseData};
};
