'use client';
export default function Error({ error }: { error: Error }) {
  return (
    <main style={{ padding: 24 }}>
      <h1>Something went sideways</h1>
      <pre>{error.message}</pre>
    </main>
  );
}
