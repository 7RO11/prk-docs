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

export default function TargetingScope() {
  return (
    <Trifold>
      <Sitenav />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 4th, 2026</Leadertop>
          <Mainheader>Targeting Scope</Mainheader>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <Leadertop>vendor</Leadertop>
          <Minorheader>acquisition</Minorheader>
          <Textblock>
            purchasable from Ranged Weapons Components in the tradeskill
            department of <Itemlink>Fair Trade</Itemlink>.
          </Textblock>
          <Itembox
            itemOne={"Targeting Scope"}
            itemOnePic={"/goggles/targetingscope.png"}
          />
          <Softrule />
          <Leadertop>tradeskill</Leadertop>
          <Minorheader>uses</Minorheader>
          <Textblock>
            used for crafting{" "}
            <Itemlink item={"sentient-targeting-goggles"}>
              Sentient Targeting Goggles
            </Itemlink>
            , among other junk rk weapons.
          </Textblock>
          <Softrule />
          <Minorheader>links</Minorheader>
          <Links id={"137189"} />
        </div>
      </Centerpiece>

      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
