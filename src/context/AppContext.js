import React from "react";

const AppContext = React.createContext({
  user: "",
  setUser: "",
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
