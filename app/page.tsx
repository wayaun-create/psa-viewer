export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/`, { cache: "no-store" });
  const text = await res.text();

  return (
    <main style={{ padding: 24 }}>
      <h1>PSA Viewer</h1>
      <pre>{text}</pre>
    </main>
  );
}
