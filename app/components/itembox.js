import Image from "next/image";
import Itemlink from "./itemlink";
import dashify from "../utils/dashify";

export default function Itembox(props) {
  return (
    <div className="min-w-full bg-(--background) p-4 border border-neutral-500/50">
      <div className="flex justify-around *:px-4 divide-x-1 divide-neutral-500/50">
        <div className="text-2xl flex flex-col items-center text-center grow basis-full">
          <Image
            src={props.itemOnePic}
            alt={props.itemOne}
            className="min-h-20 min-w-20 "
            width={0}
            height={0}
          />
          <Itemlink
            item={
              props.isMissingItemOne === true ||
              props.isMissingItemOne === undefined
                ? undefined
                : dashify(props.itemOne)
            }
          >
            {props.itemOne}
          </Itemlink>
        </div>
        {props.itemTwo ? (
          <div className="text-2xl flex flex-col items-center text-center grow basis-full">
            <Image
              src={props.itemTwoPic}
              alt={props.itemTwo}
              className="min-h-20 min-w-20"
              width={0}
              height={0}
            />
            <Itemlink
              item={
                props.isMissingItemTwo === true ||
                props.isMissingItemTwo === undefined
                  ? undefined
                  : dashify(props.itemTwo)
              }
            >
              {props.itemTwo}
            </Itemlink>
          </div>
        ) : null}
      </div>
    </div>
  );
}
