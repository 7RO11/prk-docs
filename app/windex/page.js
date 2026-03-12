import Navbar from "@/components/navbar";
import Trifold from "@/components/trifold";
import Centerpiece from "@/components/centerpiece";
import Mainheader from "@/components/mainheader";
import Nobottom from "@/components/nobottom";
import Mainrule from "@/components/mainrule";
import Minorheader from "@/components/minorheader";
import Textblock from "@/components/textblock";
import Linker from "@/components/linker";

export default function gogglesItem() {
  return (
    <Trifold>
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Mainheader>project rubi-ka docs index</Mainheader>
        </Nobottom>
        <Mainrule />
        <div className="min-w-2xl text-center sm:items-start sm:text-left">
          <Minorheader>mission guides</Minorheader>
          <Textblock>
            <Linker href={"/mission-guides/gianna-furniture-money"}>
              Gianna&apos;s furniture money
            </Linker>
          </Textblock>
          <Minorheader>tradeskill guides</Minorheader>
          <Textblock>
            <Linker href={"/tradeskill-guides/sentient-targeting-goggles"}>
              Sentient Targeting Goggles
            </Linker>
            <br />
            <Linker href={"/tradeskill-guides/weapon-data-fragments"}>
              Weapon Data Fragments
            </Linker>
            <br />
            <Linker href={"/tradeskill-guides/nano-buff-pills"}>
              Nano Buff Pills
            </Linker>
            <br />
            <Linker href={"/tradeskill-guides/som-special-arrows"}>
              Steps of Madness Special Arrows
            </Linker>
            <br />
            <Linker href={"/tradeskill-guides/fusion-ejector"}>
              Fusion Ejector
            </Linker>
          </Textblock>
          <Minorheader>orphan pages</Minorheader>
          <Textblock>
            <Linker href={"/items/sentient-targeting-goggles"}>
              Sentient Targeting Goggles
            </Linker>
            <br />
            <Linker href={"/items/season-1"}>Season 1</Linker>
          </Textblock>
        </div>
      </Centerpiece>
    </Trifold>
  );
}
