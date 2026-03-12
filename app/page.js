import Link from "next/link";
import Navbar from "@/components/navbar";
import Trifold from "@/components/trifold";
import Centerpiece from "@/components/centerpiece";
import Softrule from "@/components/softrule";
import Mainheader from "@/components/mainheader";
import Leaderbottom from "@/components/leaderbottom";
import Minorheader from "@/components/minorheader";
import Nobottom from "@/components/nobottom";
import Mainrule from "@/components/mainrule";

export default function Home() {
  return (
    <Trifold>
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Mainheader>
            twinked information dump for your favorite anarchy online emulator
          </Mainheader>
          <Leaderbottom>blah blah blah insert marketing lingo</Leaderbottom>
        </Nobottom>
        <Mainrule />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Minorheader>articles you&apos;re prolly looking for...</Minorheader>
          <div className="flex flex-col max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 *:hover:underline">
            <Link href={"/tradeskill-guides/sentient-targeting-goggles"}>
              Sentient Targeting Goggles
            </Link>
            <Link href={"/gameplay-guides/new-weapons"}>New PRK Weapons</Link>
            <Link href={"/mission-guides/gianna-furniture-money"}>
              Gianna furniture mission (how to make $ fast)
            </Link>
            <Link href={"/tradeskill-guides/weapon-data-fragments"}>
              Weapon Data Fragments
            </Link>
            <Link href={"/tradeskill-guides/nano-buff-pills"}>
              Nano Buff Pills
            </Link>
          </div>
        </div>
      </Centerpiece>
    </Trifold>
  );
}
