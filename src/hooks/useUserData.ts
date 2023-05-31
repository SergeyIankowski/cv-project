import {useUserQuery} from "@/graphql/hooks/useUserQuery";
import {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {FetchedUser} from "@/models/FetchedUser.type";

const emptyUser: FetchedUser = {
  id: "",
  created_at: "",
  profile: {
    avatar: "",
    first_name: "",
    last_name: "",
  },
  email: "",
  department: {
    id: "",
    name: "",
  },
  position: {
    id: "",
    name: "",
  },
  role: "employee",
};

export const useUserData = () => {
  const {id} = useParams();
  const {loadUserInfo, called, userData, loadingUserData} = useUserQuery();
  const loadProfileInfo = useCallback(
    () => loadUserInfo(id!),
    [id, loadingUserData]
  );
  const [userObj, setUserObj] = useState<FetchedUser>(emptyUser);
  useEffect(() => {
    if (id && !called) loadProfileInfo();
    if (called && !loadingUserData) setUserObj(userData.user);
  }, [called, loadingUserData, id, userData]);

  return {loadProfileInfo, called, loadingUserData, userData: userObj};
};
