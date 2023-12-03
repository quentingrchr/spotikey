"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  function signInWithSpotify() {
    signIn("spotify");
  }

  return (
    <button
      onClick={() => {
        signInWithSpotify();
      }}
    >
      Sign in with Spotify
    </button>
  );
}
