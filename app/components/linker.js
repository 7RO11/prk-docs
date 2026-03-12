import Link from "next/link";

export default function Linker({ href, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-xl border border-neutral-600/0 text-(--foregroundLighter) transition duration-150 hover:text-(--foregroundLighterer)"
    >
      {children}↗
    </Link>
  );
}
