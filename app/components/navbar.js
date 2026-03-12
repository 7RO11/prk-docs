import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 z-1 top-0 bg-(--backgroundContent) border border-neutral-600/0 border-b-neutral-600/80 *:hover:underline flex gap-8 p-4">
      <Link href={"/"} className="font-semibold">
        project rubi-ka docs
      </Link>
      <Link href={"/"}>home</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/windex"}>index</Link>
    </nav>
  );
}
