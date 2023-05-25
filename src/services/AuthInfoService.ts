interface UserAuthInfo {
  id: string;
  role: "admin" | "employee";
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
}
