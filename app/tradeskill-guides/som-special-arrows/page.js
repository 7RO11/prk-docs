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
import Minorheader from "@/components/minorheader";
import Textblock from "@/components/textblock";
import Itemlink from "@/components/itemlink";
import Tradeskill from "@/components/tradeskill";
import WarningBlock from "@/components/warningblock";
import Mainrule from "@/components/mainrule";

export default function SpecArrows() {
  return (
    <Trifold>
      <Sitenav currentPage={"specarrows"} />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated february 23rd, 2026</Leadertop>
          <Mainheader>Steps of Madness Special Arrows</Mainheader>
          <Leaderbottom>flare for your bow</Leaderbottom>
        </Nobottom>
        <Mainrule />
        <div>
          <Stub />
          <div></div>
        </div>
      </Centerpiece>

      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
