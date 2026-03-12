export default function Trifold({ children }) {
  return (
    <div className="flex justify-center w-full min-h-screen bg-(--background) font-sans">
      {children}
    </div>
  );
}
