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

export default function BioAnalyzingComputer() {
  return (
    <Trifold>
      <Sitenav />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 6th, 2026</Leadertop>
          <Mainheader>Bio Analyzing Computer</Mainheader>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <Leadertop>vendor</Leadertop>
          <Minorheader>acquisition</Minorheader>
          <Textblock>
            purchasable from Mechanical and Electrical Engineering Components in
            the tradeskill department of <Itemlink>Fair Trade</Itemlink>.
          </Textblock>
          <Itembox
            itemOne={"Bio Analyzing Computer"}
            itemOnePic={"/goggles/bioanalyzingcomputer.png"}
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
            used for crafting <Itemlink>Solar-Powered Mender Pistol</Itemlink>.
          </Textblock>
          <Textblock>
            used for crafting <Itemlink>Mechanical Analyzer</Itemlink>.
          </Textblock>
          <Textblock>
            used for crafting{" "}
            <Itemlink>Personalized Basic Robot Brain</Itemlink>.
          </Textblock>
          <Softrule />
          <Minorheader>links</Minorheader>
          <Links id={"156020"} />
          <br />
          <br />
          <Linker
            href={
              "https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/improved-solar-powered-pistol"
            }
          >
            https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/improved-solar-powered-pistol
          </Linker>
          <br />
          <br />
          <Linker
            href={
              "https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/gadgets-5/mechanical-analyzer"
            }
          >
            https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/gadgets-5/mechanical-analyzer
          </Linker>
          <br />
          <br />
          <Linker
            href={
              "https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/gadgets-5/personalized-basic-robot-brain"
            }
          >
            https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/gadgets-5/personalized-basic-robot-brain
          </Linker>
        </div>
      </Centerpiece>

      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
