"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { Educacion } from "@/tipos/Educacion";
import "../styles/EducacionAdminPage.css";

export default function EducacionAdminPage() {
  const { token } = useAuth();
  const [educaciones, setEducaciones] = useState<Educacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState<Educacion>({
    id: 0,
    escuela: "",
    grado: "",
    nombreCarrera: "",
    cedulaProfesional: "",
    estatus: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!token) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await apiFetch<Educacion[]>("/api/v1/Educacion", { method: "GET" }, token);
        setEducaciones(data);
      } catch (err) {
        console.error(err);
        setError("Error cargando la educación");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  if (!isMounted) return null; 

  if (!token) return <p className="error-text">Debes iniciar sesión para ver esta página</p>;
  if (loading) return <p className="loading-text">Cargando...</p>;


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    try {
      if (editingId) {
        await apiFetch(`/api/v1/Educacion/${editingId}`, {
          method: "PUT",
          body: JSON.stringify(form),
        }, token);

        setEducaciones((prev) =>
          prev.map((e) => (e.id === editingId ? { ...form, id: editingId } : e))
        );
        setEditingId(null);
      } else {
        const newEducacion = await apiFetch<Educacion>(
          "/api/v1/Educacion",
          { method: "POST", body: JSON.stringify(form) },
          token
        );
        setEducaciones((prev) => [...prev, newEducacion]);
      }

      setForm({
        id: 0,
        escuela: "",
        grado: "",
        nombreCarrera: "",
        cedulaProfesional: "",
        estatus: "",
      });
    } catch (err) {
      console.error(err);
      setError("Error guardando educación");
    }
  };

  const handleDelete = async (id: number) => {
    if (!token) return;
    try {
      await apiFetch(`/api/v1/Educacion/${id}`, { method: "DELETE" }, token);
      setEducaciones((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error(err);
      setError("Error eliminando educación");
    }
  };

  const handleEdit = (educacion: Educacion) => {
    setEditingId(educacion.id!);
    setForm(educacion);
  };

  return (
    <div className="container">
      <h2 className="heading">Educación</h2>

      {error && <p className="error-text">{error}</p>}

      <form onSubmit={handleSubmit} className="form-card">
        <input
          placeholder="Escuela"
          value={form.escuela}
          onChange={(e) => setForm({ ...form, escuela: e.target.value })}
          required
        />
        <input
          placeholder="Grado"
          value={form.grado}
          onChange={(e) => setForm({ ...form, grado: e.target.value })}
          required
        />
        <input
          placeholder="Nombre Carrera"
          value={form.nombreCarrera}
          onChange={(e) => setForm({ ...form, nombreCarrera: e.target.value })}
          required
        />
        <input
          placeholder="Cédula Profesional"
          value={form.cedulaProfesional}
          onChange={(e) => setForm({ ...form, cedulaProfesional: e.target.value })}
        />
        <input
          placeholder="Estatus"
          value={form.estatus}
          onChange={(e) => setForm({ ...form, estatus: e.target.value })}
        />
        <button type="submit">{editingId ? "Actualizar" : "Crear"}</button>
      </form>

      <table className="crud-table">
        <thead>
          <tr>
            <th>Escuela</th>
            <th>Grado</th>
            <th>Carrera</th>
            <th>Cédula</th>
            <th>Estatus</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {educaciones.map((e) => (
            <tr key={e.id}>
              <td>{e.escuela}</td>
              <td>{e.grado}</td>
              <td>{e.nombreCarrera}</td>
              <td>{e.cedulaProfesional}</td>
              <td>{e.estatus}</td>
              <td className="actions">
                <button onClick={() => handleEdit(e)} className="edit-btn">Editar</button>
                <button onClick={() => handleDelete(e.id!)} className="delete-btn">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
