import Link from "next/link";
import Navbar from "@/components/navbar";
import Trifold from "@/components/trifold";
import Centerpiece from "@/components/centerpiece";
import Softrule from "@/components/softrule";
import Mainheader from "@/components/mainheader";
import Leaderbottom from "@/components/leaderbottom";
import Minorheader from "@/components/minorheader";
import Textblock from "@/components/textblock";
import Mainrule from "@/components/mainrule";

export default function About() {
  return (
    <Trifold>
      <Navbar />
      <div></div>
      <Centerpiece>
        <Mainheader>what is project rubi-ka docs?</Mainheader>
        <Textblock>
          project rubi-ka docs is a resource for players seeking information on
          project rubi-ka content. it features the new tradeskills, encounters,
          and items added to this anarchy online preservation project.
        </Textblock>
        <Textblock>
          unlike other anarchy online websites, this focuses on being &quot;prk
          accurate&quot;. content may be different or missing on retail anarchy
          online.
        </Textblock>
        <Textblock>
          due to the alpha development stage of prk, website content may become
          incorrect over time. bugs may also temporarily impede access to prk
          content.
        </Textblock>
        <Mainrule />
        <div>
          <Minorheader>what is project rubi-ka?</Minorheader>
          <Leaderbottom>
            {" "}
            <Link
              target="_blank"
              href="https://project-rk.com/pages/about"
              className="text-zinc-400 hover:underline"
            >
              read straight from the horse&apos;s mouth.↗
            </Link>
          </Leaderbottom>
          <Textblock>
            the tl dr is <br /> &quot;Project Rubi-Ka is a server emulator
            project for the classic science fiction massively multiplayer
            roleplaying game Anarchy Online, originally developed by
            Funcom.&quot;
          </Textblock>
        </div>
        <Mainrule />
        <Minorheader>about the author</Minorheader>
        <Textblock>
          my name is tim or &quot;footl3sgeckohm&quot; on discord. i&apos;ve
          been playing anarchy online since 2007, with most of my hours post
          2016. most of my retail playtime has been solo fr00b playthroughs from
          levels 1-125. my highest level character is a 178 atrox martial
          artist. my favorite profession is meta-physicist.
        </Textblock>
        <Textblock>
          i started playing project rubi-ka in january 2024 when i heard word of
          it from guild members and have been enjoying the ride since. i am not
          officially involved with project rubi-ka, anarchy online or funcom.
        </Textblock>
      </Centerpiece>
    </Trifold>
  );
}
