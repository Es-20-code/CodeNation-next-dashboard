import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Inicio</h1>
      <p>Bienvenido a la aplicación.</p>
      <Link href="/dashboard">Ir al dashboard</Link>
    </main>
  );
}
