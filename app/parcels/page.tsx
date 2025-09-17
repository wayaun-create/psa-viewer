export const revalidate = 0; // no caching during dev

type Parcel = { id: string; parcelNumber: string; county: string; status: string };

async function fetchParcels(cursor?: string): Promise<{ items: Parcel[]; nextCursor: string | null }> {
  const base = process.env.NEXT_PUBLIC_API_BASE!;
  const url = new URL('/v1/parcels', base);
  if (cursor) url.searchParams.set('cursor', cursor);
  url.searchParams.set('limit', '20');
  const r = await fetch(url.toString(), { cache: 'no-store' });
  if (!r.ok) throw new Error(`API ${r.status}: ${await r.text()}`);
  return r.json();
}

export default async function ParcelsPage() {
  const data = await fetchParcels();
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1>Parcels</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Parcel #</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>County</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map(p => (
            <tr key={p.id}>
              <td style={{ padding: 8 }}><a href={`/parcels/${p.id}`}>{p.parcelNumber}</a></td>
              <td style={{ padding: 8 }}>{p.county}</td>
              <td style={{ padding: 8 }}>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Future: add “Load more” using nextCursor */}
    </main>
  );
}
