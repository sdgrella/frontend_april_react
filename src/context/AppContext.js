import React from "react";

const AppContext = React.createContext({
  user: "",
  title: "",
  setTitle: "",
  subtitle: "",
  setSubtitle: "",
  datesArray: "",
  setDatesArray: "",
  showAlert: "",
  setShowAlert: "",
});

export default AppContext;
