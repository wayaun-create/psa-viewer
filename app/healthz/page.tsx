export const revalidate = 0;
export default async function Healthz() {
  const api = process.env.NEXT_PUBLIC_API_BASE!;
  const r = await fetch(`${api}/health`, { cache: "no-store" });
  const j = await r.json();
  return <pre>{JSON.stringify({ viewer: 'ok', api: j }, null, 2)}</pre>;
}
