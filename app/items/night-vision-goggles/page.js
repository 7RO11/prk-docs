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
import Image from "next/image";

export default function NightVisionGoggles() {
  return (
    <Trifold>
      <Sitenav />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 6th, 2026</Leadertop>
          <Mainheader>Night Vision Goggles</Mainheader>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <Leadertop>vendor</Leadertop>
          <Minorheader>acquisition</Minorheader>
          <Textblock>
            purchasable from Basic Tools in the main store room of{" "}
            <Itemlink>Fair Trade</Itemlink>.
          </Textblock>
          <Itembox
            itemOne={"Night Vision Goggles"}
            itemOnePic={"/goggles/nightvisiongoggles.png"}
          />
          <Softrule />
          <Leadertop>uses</Leadertop>
          <Minorheader>tradeskill</Minorheader>
          <Textblock>
            used for crafting{" "}
            <Itemlink item={"sentient-targeting-goggles"}>
              Sentient Targeting Goggles
            </Itemlink>
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
                  <td>Electrical Engineering</td>
                  <td>26</td>
                </tr>
              </tbody>
            </table>
          </Textblock>
          <Softrule />
          <Leadertop>uses</Leadertop>
          <Minorheader>gameplay</Minorheader>
          <Textblock>
            applies to a cheesey night vision effect to the client when
            equipped.
          </Textblock>
          <Image
            src={"/nightvision.jpg"}
            alt="night vision goggles demo"
            width={512}
            height={0}
          />
          <Textblock>
            the effect can be disabled under actions &gt; help/settings &gt;
            settings &gt; video &gt; effects &gt; uncheck &quot;Show Others
            Effects&quot;
          </Textblock>
          <Textblock>you must zone or login to activate the change.</Textblock>
          <Softrule />
          <Leadertop>why is it good or bad</Leadertop>
          <Minorheader>analysis</Minorheader>

          <Textblock>
            this has some fringe use cases in dark dungeons like{" "}
            <Itemlink>Crypt of Home</Itemlink> or dark missions but the HUD2
            collision, requirements, and blinding effect outside these zones
            means it&apos;s typically passed on in favor of{" "}
            <Itemlink>Light Bar</Itemlink>.
          </Textblock>

          <Softrule />
          <Minorheader>links</Minorheader>
          <Links id={"29738"} />
        </div>
      </Centerpiece>

      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
