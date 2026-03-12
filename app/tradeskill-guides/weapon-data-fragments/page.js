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
import Textblock from "@/components/textblock";
import Mainrule from "@/components/mainrule";
import Minorheader from "@/components/minorheader";
import Itemlink from "@/components/itemlink";
import iccterminalPic from "@/public/iccterminals.jpg";
import vipersmgPic from "@/public/vipersmg.png";
import upgradekitPic from "@/public/upgradekit.png";
import Image from "next/image";
import WarningBlock from "@/components/warningblock";
import Linker from "@/components/linker";
import Tradeskill from "@/components/tradeskill";

export default function Fragments() {
  return (
    <Trifold>
      <Sitenav currentPage={"fragments"} />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 12th, 2026</Leadertop>
          <Mainheader>Weapon Data Fragments</Mainheader>
          <Leaderbottom>currency for your filler weapons</Leaderbottom>
        </Nobottom>
        <Mainrule />
        <div>
          <Stub
            reason={"incomplete references, add weapon by weapon analysis"}
          />
          <Leadertop>acquisition</Leadertop>
          <Minorheader>dungeons</Minorheader>
          <Textblock>
            <Itemlink>Weapon Data Fragments</Itemlink> are known to drop from
            mobs in <Itemlink>The Abandoned Subway</Itemlink> and{" "}
            <Itemlink>The Temple of the Three Winds</Itemlink>. after looting
            them, they can be consumed like mission tokens.
          </Textblock>
          <Softrule />
          <Leadertop>location</Leadertop>
          <Minorheader>ICC</Minorheader>
          <Textblock>
            to use your fragments, you will find new terminals in{" "}
            <Itemlink>ICC</Itemlink>. for low level sided players this can be a
            somewhat long trip from where you land after{" "}
            <Itemlink>Teleport Tower</Itemlink>.
            <br />
            ICC can be warped to using Whoompahs
          </Textblock>
          <Textblock>
            for neutrals
            <br />
            <Itemlink>Borealis</Itemlink> &gt; <Itemlink>Newland City</Itemlink>{" "}
            &gt; <Itemlink>ICC</Itemlink>
          </Textblock>

          <Textblock>
            for clans
            <br /> run east from <Itemlink>West Athen</Itemlink> to{" "}
            <Itemlink>Old Athen</Itemlink> Whoompahs. <br />
            <Itemlink>Old Athen</Itemlink> &gt; <Itemlink>Tir</Itemlink> &gt;{" "}
            <Itemlink>ICC</Itemlink>
          </Textblock>

          <Textblock>
            for omnis
            <br /> run into <Itemlink>Rome</Itemlink> central area where the
            Whoompahs are. <br />
            <Itemlink>Rome</Itemlink> &gt; <Itemlink>Galway Castle</Itemlink>{" "}
            &gt; <Itemlink>Omni-Trade</Itemlink> &gt; <Itemlink>ICC</Itemlink>
          </Textblock>
          <Image src={iccterminalPic} alt="terminals waiting for they cash" />
          <Softrule />
          <Leadertop>the new toys</Leadertop>
          <Minorheader>vendor</Minorheader>
          <Textblock>
            the left most vendor sells 000 melee weapons. the center vendor
            sells 000 ranged weapons. each weapon costs 1 fragment, and is
            interpolated at levels 15, 25, 50, 75 and 100.
          </Textblock>
          <Textblock>
            the right most vendor sells weapon upgrades. each upgrade is
            interpolated the same as the weapons. <br />
            <ol className="list-disc">
              <li>the special attack upgrades cost 5 fragments.</li>
              <li>the adjustment kit upgrades cost 10 fragments.</li>
              <li>the basic upgrade kits cost 5 fragments.</li>
            </ol>
          </Textblock>
          <WarningBlock>
            items like{" "}
            <Itemlink>AssaultRifle Weapons Basic Upgrade Kit</Itemlink> are for
            turning a non-000 weapon into a 000 weapon. items like{" "}
            <Itemlink>AimedShot Weapons Upgrade Kit</Itemlink> are for upgrading
            000 weapons.
          </WarningBlock>
          <Textblock>
            at the bottom of the 000 weapon&apos;s description, it will say how
            to upgrade it. they must be upgraded in a specific order and are not
            modular. for example, you cannot use{" "}
            <Itemlink>Burst Weapons Upgrade Kit</Itemlink> on a 000 pistol.
          </Textblock>
          <Textblock>
            for further reading on the subject, i recommend{" "}
            <Linker
              href={
                "https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/the--000-weapon-upgrades"
              }
            >
              AO-Universe&apos;s guide
            </Linker>
            . there is one major difference between retail and prk however...
          </Textblock>
          <Tradeskill
            source={upgradekitPic}
            sourceName={"Burst Weapons Upgrade Kit"}
            target={vipersmgPic}
            targetName={"Viper IX - 000"}
            result={vipersmgPic}
            resultName={"Viper IX - 004"}
            reqOne={"2.5x the weapon's QL in Weapon Smithing"}
          />
          <Textblock>
            the upgrading tradeskill process requires half as much weapon
            smithing as retail anarchy online.
          </Textblock>
          <Softrule />
          <Leadertop>why is it good or bad</Leadertop>
          <Minorheader>analysis</Minorheader>
          <Textblock>
            the 000 weapons are useful as filler weapons when you can&apos;t
            find anything better. this commonly occurs around level 15-20. pound
            for pound, they are generally worse than dungeon loot weapons like
            the <Itemlink>TOTW</Itemlink> suite.
          </Textblock>
          <Textblock>
            you will quickly outgrow your QL 15 000 weapon, therefore you should
            not spend fragments on lots of upgrade kits for it.
          </Textblock>
          <Textblock>
            the basic upgrade kits are of questionable value. since they only
            interpolate to QL 100, the highest level weapon you could craft with
            one would be QL 109. considering the 000 weapon terminals sell QL
            100 weapons for only 1 fragment, it seems to be a raw deal.
          </Textblock>
          <Softrule />
          <Leadertop>project rubi-ka lore</Leadertop>
          <Minorheader>history</Minorheader>
          <Textblock>
            added in <Itemlink>season 1</Itemlink>.
          </Textblock>
          <Textblock>
            in a previous implementation in <Itemlink>season 1</Itemlink>, 000
            weapons would drop from the same mobs that dropped{" "}
            <Itemlink>Weapon Data Fragments</Itemlink>. this was changed likely
            to increase accessibility of these filler weapons.
          </Textblock>
          <Softrule />
          <Minorheader>links</Minorheader>
          <Linker
            href={
              "https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/the--000-weapon-upgrades"
            }
          >
            https://www.ao-universe.com/guides/classic-ao/tradeskill-guides-6/weapon-4/the--000-weapon-upgrades
          </Linker>
        </div>
      </Centerpiece>

      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
