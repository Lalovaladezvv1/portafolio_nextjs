"use client";

import { useState } from "react";
import { auth } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import "../styles/LoginForm.css";

export default function LoginForm() {
  const { setToken } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const { token } = await auth.login(email, password);
      setToken(token);
      router.push("/admin");
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <>
    <br />
      <h2 className="heading">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="login-card">

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn">Entrar</button>
      </form>
    </>
  );
}
