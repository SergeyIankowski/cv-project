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
  cvs: [],
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
  const {loadUserInfo, called, userData, loadingUserData, error} =
    useUserQuery();
  const loadProfileInfo = useCallback(
    (idName?: string | number) =>
      idName ? loadUserInfo(idName) : loadUserInfo(idValue!),
    [idValue, loadingUserData]
  );
  const [userObj, setUserObj] = useState<FetchedUser>(emptyUser);
  useEffect(() => {
    const userDataIsNotCalled = idValue && !called;
    const userDataReceived = called && !loadingUserData && !error;

    if (userDataIsNotCalled) loadProfileInfo();
    if (userDataReceived) setUserObj(userData.user);
  }, [called, loadingUserData, idValue, userData]);
  useEffect(() => {
    if (id && AuthInfoService.isAuthorizedUser(id!)) loadProfileInfo(id);
    if (id && AuthInfoService.isUnAuthorizedUser(id!)) loadProfileInfo(idValue);
  }, [id]);
  return {loadProfileInfo, called, loadingUserData, userData: userObj};
};
