export default function WarningBlock({ children }) {
  return (
    <div className="p-4 text-xl my-3 font-light text-(--warning) border border-(--warning)/50">
      ⚠ {children}
    </div>
  );
}
