import Navbar from "@/components/navbar";
import Trifold from "@/components/trifold";
import Centerpiece from "@/components/centerpiece";
import Softrule from "@/components/softrule";
import Mainheader from "@/components/mainheader";
import Leaderbottom from "@/components/leaderbottom";
import Leadertop from "@/components/leadertop";
import Sitenav from "@/components/sitenav";
import Nobottom from "@/components/nobottom";
import Mainrule from "@/components/mainrule";
import Minorheader from "@/components/minorheader";
import Textblock from "@/components/textblock";
import Itemlink from "@/components/itemlink";
import Image from "next/image";
import Waypoint from "@/components/waypoint";
import Itembox from "@/components/itembox";
import WarningBlock from "@/components/warningblock";
import Missinglinks from "@/components/missinglinks";

export default function Pills() {
  return (
    <Trifold>
      <Sitenav currentPage={"pills"} />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 4th, 2026</Leadertop>
          <Mainheader>Nano Buff Pills</Mainheader>
          <Leaderbottom>convenience for your twinking</Leaderbottom>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <Leadertop>location</Leadertop>
          <Minorheader>Derek</Minorheader>
          <Textblock>
            Derek can be found in <Itemlink>Borealis</Itemlink>. <br />
            <Itemlink>Borealis</Itemlink> can be warped to using Whoompahs.{" "}
            <br />
            <Itemlink>ICC</Itemlink> &gt; <Itemlink>Newland City</Itemlink> &gt;{" "}
            <Itemlink>Borealis</Itemlink>
          </Textblock>
          <Image src={"/pills/derek.jpg"} alt="dummy" width={512} height={0} />
          <Waypoint command="/waypoint 651 631 800" />
          <Softrule />
          <Leadertop>the new toys</Leadertop>
          <Minorheader>vendor</Minorheader>
          <Textblock>
            Derek sells the empty pills. you will have to fill them yourself or
            find another player to fill them.
          </Textblock>
          <Itembox
            itemOne={"Empty Nano Buff Pill: Skill Wrangler (Premium)"}
            itemOnePic={"/pills/premiumpill.png"}
          />
          <Textblock>each empty pill costs 100,000.</Textblock>
          <Minorheader>availability</Minorheader>
          <Textblock>list of empty buff pills for sale</Textblock>
          <Itembox
            itemOne={"Empty Nano Buff Pill: Enhanced Senses"}
            itemOnePic={"/pills/sensepill.png"}
            itemTwo={"Empty Nano Buff Pill: Essence of Behemoth"}
            itemTwoPic={"/pills/behepill.png"}
          />
          <Itembox
            itemOne={"Empty Nano Buff Pill: Feline Grace"}
            itemOnePic={"/pills/felinepill.png"}
            itemTwo={"Empty Nano Buff Pill: Iron Circle"}
            itemTwoPic={"/pills/ironpill.png"}
          />
          <Itembox
            itemOne={"Empty Nano Buff Pill: Neuronal Stimulator"}
            itemOnePic={"/pills/neuropill.png"}
            itemTwo={"Empty Nano Buff Pill: Prodigious Strength"}
            itemTwoPic={"/pills/prodpill.png"}
          />
          <Itembox
            itemOne={"Empty Nano Buff Pill: Superior First Aid"}
            itemOnePic={"/pills/aidpill.png"}
            itemTwo={"Empty Nano Buff Pill: Skill Wrangler (Premium)"}
            itemTwoPic={"/pills/premiumpill.png"}
          />
          <Softrule />
          <Leadertop>acquisition</Leadertop>
          <Minorheader>tradeskill</Minorheader>
          <Textblock>
            empty pills have an on-use effect that fills them if the user meets
            the requirements. you will need the nano skills to cast the program
            on the pill as well as the program uploaded.
          </Textblock>
          <Itembox
            itemOne={"Nano Pill Buff: Skill Wrangler (Premium)"}
            itemOnePic={"/pills/premiumpillfilled.png"}
          />
          <Textblock>
            the filled pill will be a stack of 3 charges. the pills are not
            refillable. the program will terminate if you attack or are
            attacked.
          </Textblock>
          <WarningBlock>
            before using the filled pill, make sure you have enough ncu
            available. if you don&apos;t then it will consume the charge without
            giving you the program.
          </WarningBlock>
          <Softrule />
          <Leadertop>why is it good or bad</Leadertop>
          <Minorheader>analysis</Minorheader>
          <Textblock>
            the pills are useful for stacking buffs from different professions
            to use all at once, for example stacking{" "}
            <Itemlink>Iron Circle</Itemlink> with{" "}
            <Itemlink>Essence of Behemoth</Itemlink> to equip something you need
            lots of STA/STR for.
          </Textblock>
          <Textblock>
            the <Itemlink>Skill Wrangler</Itemlink> pill will break on combat,
            but pets summoned during the effect will stay. this opens up more
            opportunities for pet classes to cast high level pets on the go.
          </Textblock>
          <Textblock>
            besides the more nuanced uses, the pills will reduce your buff
            begging by 75% given that you get the real program at the time of
            filling.
          </Textblock>
          <Softrule />
          <Leadertop>project rubi-ka lore</Leadertop>
          <Minorheader>history</Minorheader>
          <Textblock>
            added in between <Itemlink>season 1</Itemlink> and{" "}
            <Itemlink>season 1.5</Itemlink>.
          </Textblock>
          <Textblock>
            the vendor and pills were available during{" "}
            <Itemlink>the playtests</Itemlink> but were not used due to a lack
            of time.
          </Textblock>
        </div>
      </Centerpiece>

      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
