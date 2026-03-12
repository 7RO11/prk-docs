export default function Centerpiece({ children }) {
  return (
    <main className="flex min-h-screen max-w-3xl flex-col items-center py-24 px-16 bg-(--backgroundContent) border border-neutral-600/30 sm:items-start *:py-6">
      {children}
    </main>
  );
}
