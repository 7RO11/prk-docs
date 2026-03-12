import Navbar from "@/components/navbar";
import Trifold from "@/components/trifold";
import Centerpiece from "@/components/centerpiece";
import Softrule from "@/components/softrule";
import Mainheader from "@/components/mainheader";
import Leaderbottom from "@/components/leaderbottom";
import Leadertop from "@/components/leadertop";
import Sitenav from "@/components/sitenav";
import Nobottom from "@/components/nobottom";
import Stub from "@/components/stub";
import Mainrule from "@/components//mainrule";
import Missinglinks from "@/components/missinglinks";
import Minorheader from "@/components/minorheader";
import Textblock from "@/components/textblock";
import Itemlink from "@/components/itemlink";
import Tradeskill from "@/components/tradeskill";

export default function Fusion() {
  return (
    <Trifold>
      <Sitenav currentPage={"fusion"} />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 10th, 2026</Leadertop>
          <Mainheader>Fusion Ejector</Mainheader>
          <Leaderbottom>simple recipe for your new smg</Leaderbottom>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <Leadertop>acquisition</Leadertop>
          <Minorheader>tradeskill</Minorheader>
          <Textblock>
            combine the new <Itemlink>Beta Ejector</Itemlink> with a{" "}
            <Itemlink>Gamma Ejector</Itemlink>.
          </Textblock>
          <Tradeskill
            source={"/ejector.png"}
            sourceName={"Gamma Ejector"}
            target={"/ejector.png"}
            targetName={"Beta Ejector"}
            result={"/ejector.png"}
            resultName={"Fusion Ejector"}
            reqOne={"no skills"}
          />
        </div>
      </Centerpiece>

      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
