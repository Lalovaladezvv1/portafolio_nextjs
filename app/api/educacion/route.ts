import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://apidonetportfolio.onrender.com/api/v1/Educacion"
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error en API:", err);
    return NextResponse.json({ error: "Error al obtener educación" }, { status: 500 });
  }
}
