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
import Sitenav from "@/components/sitenav";
import Nobottom from "@/components/nobottom";
import Mainrule from "@/components/mainrule";
import Missinglinks from "@/components/missinglinks";
import Itembox from "../../components/itembox";
import WarningBlock from "../../components/warningblock";
import Linker from "../../components/linker";

export default function NewWeapons() {
  return (
    <Trifold>
      <Sitenav currentPage={"newWeapons"} />
      <Navbar />
      <Centerpiece>
        <Nobottom>
          <Leadertop>last updated march 12th, 2026</Leadertop>
          <Mainheader>unique PRK weapons</Mainheader>
          <Leaderbottom>the new toys</Leaderbottom>
        </Nobottom>
        <Mainrule />
        <div>
          <Missinglinks />
          <WarningBlock>
            drop rates are ball park estimates based on personal experience
          </WarningBlock>
          <Softrule />
          <Leadertop>location</Leadertop>
          <Minorheader>Subway</Minorheader>
          <Itembox
            itemOne="Overcharged Nova Flow - Mk IV"
            itemOnePic="/nova.png"
          />
          <Leaderbottom>drops from Eumenides, 25% chance</Leaderbottom>

          <Itembox
            itemOne="Prototype Energy Katana"
            itemOnePic="/new-weapons/katana.png"
          />
          <Leaderbottom>
            drops from Integrated Emissary, 25% chance
          </Leaderbottom>
          <Softrule />
          <Leadertop>location</Leadertop>

          <Minorheader>Temple of the Three Winds</Minorheader>
          <Itembox
            itemOne="Arm of the Disciple"
            itemOnePic="/new-weapons/arm.png"
          />
          <Leaderbottom>
            drops from pistol wielding cultists, 2-3% chance
          </Leaderbottom>

          <Itembox
            itemOne="Absolution Hammer"
            itemOnePic="/new-weapons/hammer.png"
          />
          <Leaderbottom>
            drops from hammer wielding cultists, 2-3% chance
          </Leaderbottom>

          <Itembox
            itemOne="Cries from the Aether"
            itemOnePic="/new-weapons/cries.png"
          />
          <Leaderbottom>
            drops from shotgun wielding cultists, 2-3% chance
          </Leaderbottom>
          <Itembox
            itemOne="B-19 Modified Breathing Space - Vacuum Creator"
            itemOnePic="/new-weapons/space.png"
          />
          <Leaderbottom>drops from Reverend Hyuan, 25% chance</Leaderbottom>

          <Itembox
            itemOne="Shadowfade Rifle"
            itemOnePic="/new-weapons/fade.png"
          />
          <Leaderbottom>drops from Reverend Dashell, untested</Leaderbottom>

          <Itembox
            itemOne="Khalum's Reliance"
            itemOnePic="/new-weapons/khalum.png"
          />
          <Leaderbottom>drops from Khalum, 25% chance</Leaderbottom>

          <Softrule />
          <Leadertop>location</Leadertop>
          <Minorheader>Steps of Madness</Minorheader>
          <Itembox itemOne="Beta Ejector" itemOnePic="/ejector.png" />
          <Leaderbottom>
            drops from Figment of Imagination, 10% chance
          </Leaderbottom>

          <Itembox
            itemOne="Bow of Forsaken Reveries"
            itemOnePic="/new-weapons/forsaken.png"
          />
          <Leaderbottom>drops from Jealousy, 25% chance</Leaderbottom>
          <Softrule />
          <Leadertop>location</Leadertop>
          <Minorheader>Cyborg Barracks</Minorheader>
          <Itembox
            itemOne="Perfected Immortal Katana"
            itemOnePic="/new-weapons/perfect.png"
          />
          <Leaderbottom>drops from Commander Jocasta, 2/2 drops</Leaderbottom>
          <Softrule />
          <Leadertop>location</Leadertop>
          <Minorheader>Foremans</Minorheader>
          <Itembox
            itemOne="Omni-Med Scalpel"
            itemOnePic="/new-weapons/scalp.png"
          />
          <Leaderbottom>
            drops from Research Technicians, 25% chance
          </Leaderbottom>
          <Itembox
            itemOne="Ionization Cannon"
            itemOnePic="/new-weapons/cannon.png"
          />
          <Leaderbottom>
            drops from T.I.M., high chance possibly 100%
          </Leaderbottom>
          <Softrule />
          <Leadertop>acquisition</Leadertop>
          <Minorheader>tradeskill</Minorheader>
          <Itembox
            itemOne="Fusion Ejector"
            itemOnePic="/new-weapons/ejector.png"
          />
          <Leaderbottom>
            tradeskilled, see my{" "}
            <Linker href={"/tradeskill-guides/fusion-ejector"}>
              Fusion Ejector guide
            </Linker>
          </Leaderbottom>
          <Softrule />
          <Leadertop>development</Leadertop>
          <Minorheader>unused</Minorheader>
          <Itembox
            itemOne="Cast-Off Grenade-Thrower"
            itemOnePic="/new-weapons/grenade.png"
          />
          <Leaderbottom>testing weapon</Leaderbottom>
        </div>
      </Centerpiece>
      <div className="min-w-100 hidden xl:block"></div>
    </Trifold>
  );
}
