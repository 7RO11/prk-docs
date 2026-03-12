import Navbar from "@/components/navbar";
import Trifold from "@/components/trifold";
import Centerpiece from "@/components/centerpiece";
import Softrule from "@/components/softrule";
import Mainheader from "@/components/mainheader";
import Leadertop from "@/components/leadertop";
import Sitenav from "@/components/sitenav";
import Nobottom from "@/components/nobottom";
import Mainrule from "@/components/mainrule";
import Minorheader from "@/components/minorheader";
import Textblock from "@/components/textblock";
import Itemlink from "@/components/itemlink";
import Links from "@/components/links";
import Itembox from "@/components/itembox";
import Missinglinks from "@/components/missinglinks";
import Linker from "@/components/linker";

export default function Xu11Serum() {
  return (
    <Trifold>
      <Sitenav />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 6th, 2026</Leadertop>
          <Mainheader>XU-11 Serum</Mainheader>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <Leadertop>vendor</Leadertop>
          <Minorheader>acquisition</Minorheader>
          <Textblock>
            purchasable from Pharmacy and Chemistry Components in the tradeskill
            department of <Itemlink>Fair Trade</Itemlink>.
          </Textblock>
          <Itembox
            itemOne={"XU-11 Serum"}
            itemOnePic={"/goggles/xu11serum.png"}
          />
          <Softrule />
          <Leadertop>tradeskill</Leadertop>
          <Minorheader>uses</Minorheader>
          <Textblock>
            used for crafting{" "}
            <Itemlink item={"sentient-targeting-goggles"}>
              Sentient Targeting Goggles
            </Itemlink>
            .
          </Textblock>
          <Textblock>
            used for crafting{" "}
            <Itemlink>Trimmer - Increase Aggressiveness</Itemlink>.
          </Textblock>
          <Softrule />
          <Minorheader>links</Minorheader>
          <Links id={"156020"} />
          <br />
          <br />
          <Linker
            href={
              "https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/gadgets-5/aggression-trimmer"
            }
          >
            https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/gadgets-5/aggression-trimmer
          </Linker>
        </div>
      </Centerpiece>

      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
