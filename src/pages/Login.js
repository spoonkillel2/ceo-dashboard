import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logIn } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div>
      <form>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={(e) => e.preventDefault(logIn(email, password))}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
