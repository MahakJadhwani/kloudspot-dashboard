import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import loginBg from "../assets/login-bg.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setLoading(true);
    try {
      // TEMP / REAL API
      const data = await loginUser(email, password);

      // IMPORTANT
      localStorage.setItem("token", data.token || "dummy-token");

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-end px-6 lg:px-24">
        <div className="w-full max-w-[420px] bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <ErrorMessage message={error} />
            {loading && <Loader />}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
