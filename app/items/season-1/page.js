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
import Stub from "@/components/stub";
import Missinglinks from "@/components/missinglinks";

export default function SeasonOne() {
  return (
    <Trifold>
      <Sitenav />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 4th, 2026</Leadertop>
          <Mainheader>season 1</Mainheader>
          <Leaderbottom>what started it all</Leaderbottom>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <Leadertop>season rules</Leadertop>
          <Minorheader>special rules</Minorheader>

          <Nobottom>
            <ol className="list-disc">
              <li>all players had access to GM characters</li>
              <li>
                after september 9th, 2024, players could choose between a
                regular, GM, or ironman character
              </li>
              <li>
                after september 9th, players would start new characters on{" "}
                <Itemlink>ICC Shuttleport</Itemlink> instead of{" "}
                <Itemlink>Newland City</Itemlink>
              </li>
              <li>
                after october 13th, 2024, players could no longer login more
                than 2 game accounts at once
              </li>
            </ol>
          </Nobottom>

          <Softrule />
          <Leadertop>project rubi-ka lore</Leadertop>
          <Minorheader>history</Minorheader>
          <Textblock>
            it&apos;s hard to say exactly when season 1 started.{" "}
            <Itemlink>Ithaca</Itemlink>, prk&apos;s public test server had been
            open intermittently for a long time before most people would call
            the start of season 1. at some point in fall of 2024, players began
            playing regular characters despite having access to GM characters.
          </Textblock>
          <Textblock>
            during the course of season 1, the player count sat at single digits
            for the majority of its days.
          </Textblock>
          <Textblock>season 1 ended on november 25, 2024.</Textblock>
        </div>
      </Centerpiece>

      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
