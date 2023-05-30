export const Pages = {
  main: {
    root: "/",
    employees: "employees",
    info: {
      root: `employees/:id`,
      profile: "profile",
      skills: "skills",
      languages: "languages",
      cvs: "cvs",
    },
  },
  auth: {
    root: "/auth",
    login: "login",
    signup: "signup",
  },
  notFound: "/*",
};
