import {ID} from "@/graphql/interfaces/ID.type";
import {ROLES} from "@/models/Roles";

interface UserAuthInfo {
  id: string;
  email: string;
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
    const {role}: {role: string} = this.getAuthInfo();
    return role.toLowerCase() === ROLES.admin.toLowerCase();
  }
  static isNotAdmin() {
    const {role}: {role: string} = this.getAuthInfo();
    return role.toLowerCase() !== ROLES.admin.toLowerCase();
  }
  static isAuthorizedUser(checkabledId: ID) {
    const {id} = this.getAuthInfo();
    return checkabledId === id;
  }
  static isUnAuthorizedUser(checkabledId: ID) {
    const {id} = this.getAuthInfo();
    return checkabledId !== id;
  }
  static isAuthorizedUserByEmail(emailForCheck: string) {
    const {email} = this.getAuthInfo();
    return emailForCheck === email;
  }
}
