import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="mx-auto w-full max-w-7xl flex flex-col items-center justify-center gap-1 py-8">
      <div className="card bg-gray-700 w-96 shadow-sm">
        <div className="card-body items-center">
          <h2 className="card-title">Login Form</h2>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input"
              placeholder="Enter email here"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter password here"
            />
          </fieldset>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleSubmit} >Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
