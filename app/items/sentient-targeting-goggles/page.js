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
import Linker from "@/components/linker";
import Itemlink from "@/components/itemlink";
import Missinglinks from "@/components/missinglinks";
import Links from "@/components/links";

export default function GogglesItem() {
  return (
    <Trifold>
      <Sitenav />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated february 25th, 2026</Leadertop>
          <Mainheader>Sentient Targeting Goggles</Mainheader>
          <Leaderbottom>the new hotness</Leaderbottom>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <Leadertop>tradeskill</Leadertop>
          <Minorheader>acquisition</Minorheader>
          <Textblock>
            see my{" "}
            <Linker href={"/tradeskill-guides/sentient-targeting-goggles"}>
              Sentient Targeting Goggles tradeskill guide
            </Linker>
            .
          </Textblock>
          <Softrule />
          <Leadertop>facts</Leadertop>
          <Minorheader>basics</Minorheader>
          <Textblock>slot(s): HUD2</Textblock>
          <Textblock>
            requirements{" "}
            <table className="table-fixed *:text-left">
              <thead>
                <tr className="*:p-6 bg-(--background)">
                  <th>stat</th>
                  <th>value</th>
                </tr>
              </thead>
              <tbody className="bg-(--backgroundLighter)">
                <tr className="*:p-6 ">
                  <td>Computer Literacy</td>
                  <td>150</td>
                </tr>
                <tr className="*:p-6 bg-(--background)">
                  <td>Pharmaceuticals</td>
                  <td>150</td>
                </tr>
              </tbody>
            </table>
          </Textblock>
          <Textblock>
            modifiers (abridged)
            <table className="table-fixed *:text-left">
              <thead>
                <tr className="*:p-6 bg-(--background)">
                  <th>stat</th>
                  <th>value</th>
                </tr>
              </thead>
              <tbody className="bg-(--backgroundLighter)">
                <tr className="*:p-6 ">
                  <td>CriticalIncrease</td>
                  <td>15</td>
                </tr>
                <tr className="*:p-6 bg-(--background)">
                  <td>Shotgun</td>
                  <td>10</td>
                </tr>
                <tr className="*:p-6">
                  <td>Rifle</td>
                  <td>10</td>
                </tr>
                <tr className="*:p-6 bg-(--background)">
                  <td>Fling Shot</td>
                  <td>5</td>
                </tr>
                <tr className="*:p-6">
                  <td>Aimed Shot</td>
                  <td>5</td>
                </tr>
                <tr className="*:p-6 bg-(--background)">
                  <td>all* other weapon skills</td>
                  <td>-4000</td>
                </tr>
              </tbody>
            </table>
            *exceptions include Burst and Multiple Ranged
          </Textblock>

          <Softrule />
          <Leadertop>why is it good or bad</Leadertop>
          <Minorheader>analysis</Minorheader>

          <Textblock>
            for shotgun traders and rifle agents, STG is always an upgrade.
            being in HUD2 makes equipment collisions rare and the requirements
            are easy to meet around level 25.
          </Textblock>
          <Textblock>
            for other professions that do not specialize in shotguns or rifles,
            your mileage may vary. without enough skill in shotgun or rifle, you
            will find that your damage output suffers. this becomes especially
            so when fighting higher level mobs that evade most of your low-ar
            attacks.
          </Textblock>
          <Textblock>
            soldiers have access to a self-only shotgun nano buff line, and a
            rifle nano buff. solders and engineers can perk &quot;Shotgun
            Mastery&quot;.
          </Textblock>
          <Textblock>
            some normally decent weapons such as{" "}
            <Itemlink>Ultra-Light Missile Pistol Raid 9-X</Itemlink> and{" "}
            <Itemlink>Diamondine Kick Pistol</Itemlink> are not viable with STG,
            making them less desirable than their pure shotgun counterparts.
          </Textblock>

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
