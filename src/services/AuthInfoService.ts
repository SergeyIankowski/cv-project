import {ROLES} from "@/models/Roles";

interface UserAuthInfo {
  id: string;
  role: ROLES.employee | ROLES.admin;
}

const authInfoName = "authInfo";

export class AuthInfoService {
  static saveAuthInfo(data: UserAuthInfo) {
    const dataToSave = JSON.stringify(data);
    localStorage.setItem(authInfoName, dataToSave);
  }
  static getAuthInfo() {
    if (localStorage.getItem(authInfoName)) {
      const json = localStorage.getItem(authInfoName);
      return JSON.parse(json!);
    }
    return "";
  }
  static removeAuthInfo() {
    if (localStorage.getItem(authInfoName)) {
      localStorage.removeItem(authInfoName);
    }
  }
  static isAdmin() {
    const {role} = this.getAuthInfo();
    return role === ROLES.admin;
  }
  static isAuthorizedUser(checkabledId: string | number) {
    const {id} = this.getAuthInfo();
    return checkabledId === id;
  }
  static isUnAuthorizedUser(checkabledId: string | number) {
    const {id} = this.getAuthInfo();
    return checkabledId !== id;
  }
}
