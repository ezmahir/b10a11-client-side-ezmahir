import React, { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn btn-outline">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
