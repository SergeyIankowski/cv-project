/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from "@apollo/client";
import {USERS} from "../queries";
import {UserData} from "@/models/UserData.type";
import {useEffect, useState} from "react";
import {FETCH_POLICY} from "../fetchPolicy";

const convertQueryData: (data: any) => UserData[] = data => {
  return data.map((user: any) => {
    return {
      id: user.id,
      imgPath: user.profile.avatar,
      firstName: user.profile.first_name,
      lastName: user.profile.last_name,
      email: user.email,
      department: user.department_name,
      position: user.position_name,
    };
  });
};
export const useEmployeesQuery = () => {
  const [responseData, setResponceData] = useState<UserData[]>([]);
  const {loading, data, error} = useQuery(USERS, {
    fetchPolicy: FETCH_POLICY.cacheAndNetwork,
  });

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setResponceData(convertQueryData(data.users));
  }, [loading]);

  return {loading, data: responseData};
};
