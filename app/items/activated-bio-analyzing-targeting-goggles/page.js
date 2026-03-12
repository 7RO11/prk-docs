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

export default function ActivatedBioAnalyzingTargetingGoggles() {
  return (
    <Trifold>
      <Sitenav />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 6th, 2026</Leadertop>
          <Mainheader>Activated Bio-Analyzing Targeting Goggles</Mainheader>
        </Nobottom>
        <Mainrule />
        <div>
          <Leadertop>acquisition</Leadertop>
          <Minorheader>tradeskill</Minorheader>
          <Textblock>
            part of the{" "}
            <Itemlink item={"sentient-targeting-goggles"}>
              Sentient Targeting Goggles
            </Itemlink>{" "}
            tradeskill.
          </Textblock>
          <Itembox
            itemOne={"Activated Bio-Analyzing Targeting Goggles"}
            itemOnePic={"/goggles/activatedbioanalyzingtargetinggoggles.png"}
          />
          <Softrule />
          <Minorheader>links</Minorheader>
          <Links id={"500019"} />
        </div>
      </Centerpiece>

      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
