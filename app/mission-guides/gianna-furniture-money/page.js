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
import Waypoint from "@/components/waypoint";
import WarningBlock from "@/components/warningblock";
import Itembox from "@/components/itembox";
import Sitenav from "@/components/sitenav";
import Nobottom from "@/components/nobottom";
import giannaPic from "@/public/gianna.jpg";
import pietroPic from "@/public/pietro.jpg";
import topietroPic from "@/public/topietro.jpg";
import pietroringPic from "@/public/pietroring.png";
import pietroenvelopePic from "@/public/pietroenvelope.png";
import thismeanschairPic from "@/public/thismeanschair.png";
import Image from "next/image";
import Mainrule from "@/components/mainrule";
import Linker from "@/components/linker";
import Missinglinks from "@/components/missinglinks";

export default function Gianna() {
  return (
    <Trifold>
      <Sitenav currentPage={"gianna"} />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 5th, 2026</Leadertop>
          <Mainheader>Gianna&apos;s furniture mission</Mainheader>
          <Leaderbottom>make a quick buck at any level</Leaderbottom>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <Leadertop id="gianna">location</Leadertop>
          <Minorheader>Gianna</Minorheader>
          <Textblock>
            Gianna can be found in <Itemlink>Stret West Bank</Itemlink>. <br />
            <Itemlink>Stret West Bank</Itemlink> can be warped to using
            Whoompahs. <br />
            <Itemlink>ICC</Itemlink> &gt; <Itemlink>Newland City</Itemlink> &gt;{" "}
            <Itemlink>Borealis</Itemlink> &gt;{" "}
            <Itemlink>Stret West Bank</Itemlink> <br />
            the city you are warping to inside{" "}
            <Itemlink>Stret West Bank</Itemlink> is called{" "}
            <Itemlink>Last Ditch</Itemlink>.
          </Textblock>
          <Image src={giannaPic} alt="gianna in her natural habitat" />
          <Waypoint command="/waypoint 1285 2980 790" />
          <Softrule />
          <Leadertop id="obtain">dialogue</Leadertop>
          <Minorheader>obtain the mission</Minorheader>
          <Textblock>speak with Gianna using the following options.</Textblock>
          <Textblock>
            <ol className="list-decimal">
              <li>Hi there!</li>
              <li>
                No, I don&apos;t recall the name, so I don&apos;t think
                I&apos;ve met him.
              </li>
              <li>
                I&apos;m afraid that I still don&apos;t remember anyone like
                him.
              </li>
              <li>
                I know they are bad, but I haven&apos;t heard of any abductions
                though!
              </li>
              <li>
                Who are they? You really don&apos;t think someone is trying to
                hide what happened to your husband?
              </li>
              <li>Do you want help to find your husband?</li>
              <li>
                I don&apos;t think there&apos;s much chance of it, and in any
                case, I&apos;m not afraid of them!
              </li>
            </ol>
          </Textblock>
          <Softrule />
          <Leadertop>location</Leadertop>
          <Minorheader>Pietro</Minorheader>
          <Textblock>
            Gianna is sending you to see her husband Pietro. Pietro is in{" "}
            <Itemlink>Aegean</Itemlink>.
          </Textblock>
          <Image src={pietroPic} alt="pietro hiding like a little baby" />
          <Waypoint command="/waypoint 535 346 585" />
          <Minorheader>travel</Minorheader>
          <Textblock>
            running from Gianna to Pietro is straight forward and there is
            little risk of being attacked by outdoor mobs.
          </Textblock>
          <Image src={topietroPic} alt="pietro hiding like a little baby" />
          <WarningBlock>
            while searching for Pietro, do not press tab or left click on
            Pietro. doing so will forfeit 1/2 of the mission&apos;s possible
            rewards
          </WarningBlock>
          <Softrule />
          <Leadertop>dialogue</Leadertop>
          <Minorheader>fleecing Pietro</Minorheader>
          <Textblock>speak with Pietro using the following options.</Textblock>
          <WarningBlock>
            open Pietro&apos;s dialogue with your right mouse button without
            selecting him
          </WarningBlock>
          <Textblock>
            <ol className="list-decimal">
              <li>Are you Pietro Molla?</li>
              <li>Ah, excellent! I&apos;ve been looking all over for you!</li>
              <li>Your wife?</li>
              <li>No, your wife didn&apos;t send me.</li>
              <li>
                You sure you want to give it to me, I mean it must be valuable?
              </li>
              <li>I guess I could do that.</li>
            </ol>
          </Textblock>
          <Textblock>
            after step 5 of the dialogue you will recieve a ring. after step 6
            you will recieve an envelope.
          </Textblock>
          <Itembox
            itemOne={"Pietro's Wedding Ring"}
            itemOnePic={pietroringPic}
            itemTwo={"Pietro's Sealed Envelope"}
            itemTwoPic={pietroenvelopePic}
          />
          <Softrule />
          <Leadertop>dialogue</Leadertop>
          <Minorheader>getting your chairs</Minorheader>
          <Textblock>
            return to Gianna and use the give item interaction to give her{" "}
            <Itemlink>Pietro&apos;s Wedding Ring</Itemlink>. Gianna will reward
            you with <Itemlink>This Means Chair</Itemlink>.
          </Textblock>
          <Textblock>
            right click <Itemlink>Pietro&apos;s Sealed Envelope</Itemlink> and
            you will recieve another{" "}
            <Itemlink>Pietro&apos;s Wedding Ring</Itemlink> as well as{" "}
            <Itemlink>Pietro&apos;s Envelope</Itemlink>. give Gianna the second
            ring for another <Itemlink>This Means Chair</Itemlink>.
          </Textblock>
          <Itembox
            itemOne={"This Means Chair"}
            itemOnePic={thismeanschairPic}
          ></Itembox>
          <WarningBlock>
            this mission does not reward all &quot;This Means&quot; series
            items. it is a known issue at the time of writing, see{" "}
            <Linker href="https://git.project-rk.com/prk/issues/issues/1982">
              prk/issues#1982
            </Linker>
            <a target="_blank"></a>
          </WarningBlock>
          <Softrule />
          <Minorheader>finishing up</Minorheader>
          <Textblock>
            you can safely delete any Gianna or Pietro missions you have now.
            you can also dispose of <Itemlink>Pietro&apos;s Envelope</Itemlink>.
            it is of no use besides some flavor dialogue with Gianna.
          </Textblock>
          <Textblock>
            you can now sell your <Itemlink>This Means Chair</Itemlink> or begin
            the mission again for more chairs.
          </Textblock>
          <Softrule />
          <Leadertop>maximize your chair runs</Leadertop>
          <Minorheader>tips & tricks</Minorheader>
          <Textblock>
            using your nano car <Itemlink>Kodaik Velocity IV</Itemlink> for the
            run from Gianna to Pietro will give you +500 run speed, shortening
            the run considerably.
          </Textblock>
          <Textblock>
            once Pietro gives you the items, you can either use prk&apos;s{" "}
            <Itemlink>.stuck</Itemlink> command or /terminate to quickly return
            to Gianna. using <Itemlink>.stuck</Itemlink> can only be done once
            every 30 minutes however.
          </Textblock>
          <Textblock>
            &quot;dual logging&quot; another character will net you twice the
            chairs per run time.
          </Textblock>
          <Textblock>
            all players can sell to <Itemlink>Miir Fashion</Itemlink> for
            increased omni prices. the easiest one to locate is in{" "}
            <Itemlink>Newland City</Itemlink>, closeby the{" "}
            <Itemlink>.stuck</Itemlink> warp dropoff. using this location, you
            should make at least 44,000 credits per chair.
          </Textblock>
          <Waypoint command="/waypoint 305 305 566" />

          <Softrule />
          <Leadertop>project rubi-ka lore</Leadertop>
          <Minorheader>history</Minorheader>
          <Textblock>
            this mission is included in project rubi-ka&apos;s target patch of
            anarchy online. in <Itemlink>season 1.5.2</Itemlink>, it became
            widely known amongst players as a fast and easy way to make credits.
          </Textblock>
          <Softrule />
          <Leadertop>alternative guides</Leadertop>
          <Minorheader>links</Minorheader>
          <Linker
            href={
              "https://www.ao-universe.com/guides/classic-ao/quests-guides-3/gianna-mollas-quest"
            }
          >
            https://www.ao-universe.com/guides/classic-ao/quests-guides-3/gianna-mollas-quest
          </Linker>
          <br />
          <br />
          <Linker href={"https://www.anarchy-online.eu/chairs.html"}>
            https://www.anarchy-online.eu/chairs.html
          </Linker>
        </div>
      </Centerpiece>
      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
