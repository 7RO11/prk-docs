import Navbar from "@/components/navbar";
import Trifold from "@/components/trifold";
import Centerpiece from "@/components/centerpiece";
import Softrule from "@/components/softrule";
import Mainheader from "@/components/mainheader";
import Leaderbottom from "@/components/leaderbottom";
import Minorheader from "@/components/minorheader";
import Leadertop from "@/components/leadertop";
import Textblock from "@/components/textblock";
import Itemlink from "@/components/itemlink";
import Tradeskill from "@/components/tradeskill";
import WarningBlock from "@/components/warningblock";
import Sitenav from "@/components/sitenav";
import Nobottom from "@/components/nobottom";
import Mainrule from "@/components/mainrule";
import Missinglinks from "@/components/missinglinks";
import Links from "@/components/links";

export default function Goggles() {
  return (
    <Trifold>
      <Sitenav currentPage={"goggles"} />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated february 25th, 2026</Leadertop>
          <Mainheader>Sentient Targeting Goggles</Mainheader>
          <Leaderbottom>
            powerful hud2 scope for shotguns and rifles
          </Leaderbottom>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <Leadertop>acquisition</Leadertop>
          <Minorheader>tradeskill</Minorheader>
          <Textblock>
            all ingredients listed can be found inside fair trade and can be
            purchased as any ql.
          </Textblock>
          <Textblock>
            purchase a{" "}
            <Itemlink item={"targeting-scope"}>Targeting Scope</Itemlink> from
            Ranged Weapons Components in the tradeskill department.
          </Textblock>
          <Textblock>
            purchase a{" "}
            <Itemlink item={"night-vision-goggles"}>
              Night Vision Goggles
            </Itemlink>{" "}
            from Basic Tools in the main store room.
          </Textblock>
          <Leadertop>step one</Leadertop>
          <Tradeskill
            source={"/goggles/targetingscope.png"}
            sourceName={"Targeting Scope"}
            target={"/goggles/nightvisiongoggles.png"}
            targetName={"Night Vision Goggles"}
            result={"/goggles/targetingscopeprk.png"}
            resultName={"Targeting Scope (prk)"}
            reqOne={"100 in Computer Literacy"}
            isMissingSource={false}
            isMissingTarget={false}
            isMissingResult={false}
          />
          <WarningBlock>
            the <Itemlink item={"targeting-scope"}>Targeting Scope</Itemlink> in
            the source slot of the process and the{" "}
            <Itemlink item={"targeting-scope-prk"}>Targeting Scope</Itemlink>{" "}
            result have the same name in-game. for the purposes of this guide,
            the result targeting scope will be called{" "}
            <Itemlink item={"targeting-scope-prk"}>
              Targeting Scope (prk)
            </Itemlink>
          </WarningBlock>
          <Textblock>
            purchase a{" "}
            <Itemlink item={"bio-analyzing-computer"}>
              Bio Analyzing Computer
            </Itemlink>{" "}
            from Mechanical and Electrical Engineering Components in the
            tradeskill department.
          </Textblock>
          <Leadertop>step two</Leadertop>
          <Tradeskill
            source={"/goggles/bioanalyzingcomputer.png"}
            sourceName={"Bio Analyzing Computer"}
            target={"/goggles/targetingscopeprk.png"}
            targetName={"Targeting Scope (prk)"}
            result={"/goggles/bioanalyzingtargetinggoggles.png"}
            resultName={"Bio-Analyzing Targeting Goggles"}
            reqOne={"100 in Computer Literacy"}
            isMissingSource={false}
            isMissingTarget={false}
            isMissingResult={false}
          />
          <Textblock>
            purchase a <Itemlink item={"xu-11-serum"}>XU-11 Serum</Itemlink>{" "}
            from Pharmacy and Chemistry Components in the tradeskill department.
          </Textblock>
          <Leadertop>step three</Leadertop>
          <Tradeskill
            source={"/goggles/xu11serum.png"}
            sourceName={"XU-11 Serum"}
            target={"/goggles/bioanalyzingtargetinggoggles.png"}
            targetName={"Bio-Analyzing Targeting Goggles"}
            result={"/goggles/activatedbioanalyzingtargetinggoggles.png"}
            resultName={"Activated Bio-Analyzing Targeting Goggles"}
            reqOne={"100 in Pharmacological Technology"}
            isMissingSource={false}
            isMissingTarget={false}
            isMissingResult={false}
          />
          <Textblock>
            purchase a{" "}
            <Itemlink item={"nano-circuitry-wire"}>
              Nano Circuitry Wire
            </Itemlink>{" "}
            from General Components in the tradeskill department.
          </Textblock>
          <Leadertop>step four</Leadertop>
          <Tradeskill
            source={"/goggles/nanocircuitrywire.png"}
            sourceName={"Nano Circuitry Wire"}
            target={"/goggles/activatedbioanalyzingtargetinggoggles.png"}
            targetName={"Activated Bio-Analyzing Targeting Goggles"}
            result={"/goggles/sentienttargetinggoggles.png"}
            resultName={"Sentient Targeting Goggles"}
            reqOne={"100 in Pharmacological Technology"}
            isMissingSource={false}
            isMissingTarget={false}
            isMissingResult={false}
          />
          <Softrule />
          <Leadertop>project rubi-ka lore</Leadertop>
          <Minorheader>history</Minorheader>
          <Textblock>
            added in <Itemlink item={"season-1"}>season 1</Itemlink>, albeit
            only within about one day of <Itemlink>Ithaca</Itemlink> closing
            until <Itemlink>the playtests</Itemlink> &{" "}
            <Itemlink>season 1.5</Itemlink>.
          </Textblock>
          <Softrule />
          <Minorheader>links</Minorheader>
          <Links id={"500015"} />
        </div>
      </Centerpiece>
      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
