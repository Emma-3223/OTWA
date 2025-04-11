import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../src/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../src/redux/user/userSlice.js";
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  // Innitialise useDispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider); // Results from the user google data
      // console.log(result)
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/')
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="flex  items-center gap-3 shadow-md rounded mt-2 hover:opacity-75"
    >
      <span className="p-2">
      <FcGoogle className="h-7 w-10" />
      </span>
      <span className="text-blue-600 font-semibold">Continue with Google</span>
    </button>
  );
}

export default OAuth;
