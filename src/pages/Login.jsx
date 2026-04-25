import React, { useState } from "react";
import { supabase } from "../Supabase/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      alert("Welcome! " + data.user.email);
    }
  }

  async function handleSignUp() {
    setError(null);
    setMessage(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("data:", data); // ← check this in console
    console.log("error:", error); // ← check this in console

    if (error) {
      setError(error.message);
    } else {
      setMessage("Account created! Check your email to confirm.");
    }
  }

  return (
    <div className="pt-20 flex justify-center items-center flex-col">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border text-2xl bg-red-400 outline-none"
        type="email"
        placeholder="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border my-10 text-2xl bg-red-400 outline-none"
        type="password"
        placeholder="password"
      />

      <button
        onClick={handleLogin}
        className="border text-2xl cursor-pointer bg-red-400 outline-none"
      >
        Login
      </button>

      {/* Sign Up button */}
      <button
        onClick={handleSignUp}
        className="border text-2xl cursor-pointer bg-blue-400 outline-none mt-4"
      >
        Sign Up
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};

export default Login;
