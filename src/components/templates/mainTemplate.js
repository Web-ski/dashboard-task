import React from "react";

const styledMain = {
  minHeight: "100vh",
  padding: "40px",
};

const MainTemplate = ({ children }) => <div style={styledMain}>{children}</div>;
export default MainTemplate;
