import Link from "next/link";

export default function Sitenav(props) {
  return (
    <nav className="flex sticky max-lg:hidden top-14 right-2 mt-[3.5rem] max-h-[calc(105svh-5rem)] overflow-x-hidden min-w-fit max-w-2xl flex-col items-center py-4 m-3 mb-0 pb-0 px-8 bg-(--backgroundContent) border border-neutral-600/30 sm:items-start *:py-2">
      <div className="text-3xl leading-10 tracking-tight text-black dark:text-zinc-300/85">
        gameplay guides
      </div>
      <div>
        <div className="text-2xl font-light">
          <Link
            href={"/gameplay-guides/new-weapons"}
            className={`border border-neutral-600/0 ${props.currentPage === "newWeapons" ? "border-l-(--foreground)" : "border-l-neutral-500 text-(--foregroundLighterer) transition duration-150 hover:text-(--foreground)"} pl-3`}
          >
            New PRK Weapons
          </Link>
        </div>
      </div>
      <div className="text-3xl leading-10 tracking-tight text-black dark:text-zinc-300/85">
        mission guides
      </div>
      <div>
        <div className="text-2xl font-light">
          <Link
            href={"/mission-guides/gianna-furniture-money"}
            className={`border border-neutral-600/0 ${props.currentPage === "gianna" ? "border-l-(--foreground)" : "border-l-neutral-500 text-(--foregroundLighterer) transition duration-150 hover:text-(--foreground)"} pl-3`}
          >
            Gianna&apos;s furniture money
          </Link>
        </div>
      </div>
      <div className="text-3xl leading-10 tracking-tight text-black dark:text-zinc-300/85">
        tradeskill guides
      </div>
      <div>
        <div className="text-2xl font-light">
          <Link
            href={"/tradeskill-guides/sentient-targeting-goggles"}
            className={`border border-neutral-600/0 ${props.currentPage === "goggles" ? "border-l-(--foreground)" : "border-l-neutral-500 text-(--foregroundLighterer) transition duration-150 hover:text-(--foreground)"} pl-3`}
          >
            Sentient Targeting Goggles
          </Link>
        </div>
        <div className="text-2xl font-light">
          <Link
            href={"/tradeskill-guides/weapon-data-fragments"}
            className={`border border-neutral-600/0 ${props.currentPage === "fragments" ? "border-l-(--foreground)" : "border-l-neutral-500 text-(--foregroundLighterer) transition duration-150 hover:text-(--foreground)"} pl-3`}
          >
            Weapon Data Fragments
          </Link>
        </div>
        <div className="text-2xl font-light">
          <Link
            href={"/tradeskill-guides/nano-buff-pills"}
            className={`border border-neutral-600/0 ${props.currentPage === "pills" ? "border-l-(--foreground)" : "border-l-neutral-500 text-(--foregroundLighterer) transition duration-150 hover:text-(--foreground)"} pl-3`}
          >
            Nano Buff Pills
          </Link>
        </div>
        <div className="text-2xl font-light">
          <Link
            href={"/tradeskill-guides/som-special-arrows"}
            className={`border border-neutral-600/0 ${props.currentPage === "specarrows" ? "border-l-(--foreground)" : "border-l-neutral-500 text-(--foregroundLighterer) transition duration-150 hover:text-(--foreground)"} pl-3`}
          >
            SoM Special Arrows
          </Link>
        </div>
        <div className="text-2xl font-light">
          <Link
            href={"/tradeskill-guides/fusion-ejector"}
            className={`border border-neutral-600/0 ${props.currentPage === "fusion" ? "border-l-(--foreground)" : "border-l-neutral-500 text-(--foregroundLighterer) transition duration-150 hover:text-(--foreground)"} pl-3`}
          >
            Fusion Ejector
          </Link>
        </div>
      </div>
    </nav>
  );
}
