import {useCallback, useEffect, useState} from "react";
import {useUserQuery} from "@/graphql/hooks/useUserQuery";
import {FetchedUser} from "@/models/FetchedUser.type";
import {useParams} from "react-router-dom";
import {AuthInfoService} from "@/services/AuthInfoService";
import {ROLES} from "@/models/Roles";

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
  role: ROLES.employee,
};

export const useUserData = (idValue: string | number) => {
  const {id} = useParams();
  const {loadUserInfo, called, userData, loadingUserData} = useUserQuery();
  const loadProfileInfo = useCallback(
    (idName?: string | number) =>
      idName ? loadUserInfo(idName) : loadUserInfo(idValue!),
    [idValue, loadingUserData]
  );
  const [userObj, setUserObj] = useState<FetchedUser>(emptyUser);
  useEffect(() => {
    if (idValue && !called) loadProfileInfo();
    if (called && !loadingUserData) setUserObj(userData.user);
  }, [called, loadingUserData, idValue, userData]);
  useEffect(() => {
    if (id && id === AuthInfoService.getAuthInfo().id) loadProfileInfo(id);
    if (id && id !== AuthInfoService.getAuthInfo().id) loadProfileInfo(idValue);
  }, [id]);
  return {loadProfileInfo, called, loadingUserData, userData: userObj};
};
