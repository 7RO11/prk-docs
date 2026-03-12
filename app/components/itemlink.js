import Link from "next/link";

export default function Itemlink({ item, children }) {
  return (
    <Link
      href={`/items/${item}`}
      className={`bg-(--background) italic ${item ? "text-sky-400 hover:text-sky-300" : "text-red-600 hover:text-red-400"} `}
    >
      {children}
    </Link>
  );
}
