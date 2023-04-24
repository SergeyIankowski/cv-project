export const PageStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  boxSizing: "border-box",
  "@media(min-width: 320px)": {
    maxWidth: "none",
    padding: "0px",
  },
};
export const HeaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "60px",
  width: "100%",
  backgroundColor: "#3b3b4f",
  color: "#eeeef0",
  gap: "5px",
  padding: "0 50px 5px",
};
export const MainHeaderStyle = {
  ...HeaderStyle,
  alignItems: "center",
  justifyContent: "space-around",
  "@media(max-width: 1079px)": {
    justifyContent: "space-between",
  },
};
export const ElemStyle = {
  width: "140px",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
};
export const ContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "80px",
  padding: "0px 20px",
  textAlign: "center",
  gap: "5px",
};
export const BreadCrumbsStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  height: "50px",
};