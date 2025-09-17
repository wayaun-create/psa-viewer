export const metadata = {
  title: 'PSA Viewer',
  description: 'Viewer for PSA using Render API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
