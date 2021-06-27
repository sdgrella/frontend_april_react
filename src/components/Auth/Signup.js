import { useContext, useEffect, useState } from "react";
import "../../App.css";
import AppContext from "../../context/AppContext";

import firebase from "../../lib/firebase";

function Signup() {
  const appContext = useContext(AppContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setFormData({
      email: email,
      password: password,
    });
  }, [email, password]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSignup = () => {
    // this is where we'll log the user in
    firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        appContext.setUser(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      Sign up below
      <input type="text" placeholder="Email" onChange={handleEmailChange} />
      <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      {formData.email && formData.password && (
        <button onClick={handleSignup}>Login</button>
      )}
    </>
  );
}

export default Signup;
