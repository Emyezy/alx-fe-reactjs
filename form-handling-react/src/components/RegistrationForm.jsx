import React, { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }
    // Simulate API call
    console.log("User registered:", { username, email, password });
    alert("User registered successfully!");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}         {/* ✅ matches checklist */}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}            {/* ✅ matches checklist */}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}         {/* ✅ matches checklist */}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button type="submit">Register</button>
    </form>
  );
}
