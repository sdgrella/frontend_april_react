import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import "../App.css";
import AppContext from "../context/AppContext";

function Profile() {
  const appContext = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    const userId = location.pathname.replace("/profile/", "");
    // fetch(serverURL + "/" + userId).then().then();
  }, [location]);

  return <>Profile</>;
}

export default Profile;
