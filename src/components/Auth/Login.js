import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import "../../App.css";
import AppContext from "../../context/AppContext";

import firebase from "../../lib/firebase";

function Login() {
  const appContext = useContext(AppContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);

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

  const handleLogin = () => {
    // this is where we'll log the user in
    firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;

        const userObj = {
          email: user.email,
          id: user.uid,
        };
        appContext.setUser(userObj);
        setRedirect(true);
        // fetch(stripeUrl)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     const userObj = {
        //       email: user.email,
        //       id: user.uid,
        //       paid: data.paid,
        //     };
        //     appContext.setUser(userObj);
        //   });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <>
      {redirect && <Redirect to="/" />}
      Login Below
      <input type="text" placeholder="Email" onChange={handleEmailChange} />
      <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      {formData.email && formData.password && (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
}

export default Login;
