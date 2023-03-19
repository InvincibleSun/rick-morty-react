import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, signInWithGoogle } from "../firebase-config";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthStyled } from "../styles/Auth.styled";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  }, [navigate]);

  return (
    <AuthStyled>
      <div>
        <h1>Log In</h1>
        <button type="button" onClick={signInWithGoogle}>
          <i className="fa-brands fa-google"></i>
          Log in with Google
        </button>
      </div>
    </AuthStyled>
  );
}
