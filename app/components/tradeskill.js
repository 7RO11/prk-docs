import Image from "next/image";
import Itemlink from "./itemlink";
import dashify from "../utils/dashify";

export default function Tradeskill(props) {
  return (
    <div className="min-w-full bg-(--background) p-4 border border-neutral-500/50">
      <div className="flex justify-around *:px-4">
        <div className="text-2xl flex flex-col items-center text-center">
          <Image
            src={props.source}
            alt={props.sourceName}
            className="min-h-20 min-w-20"
            width={0}
            height={0}
          />
          <Itemlink
            item={
              props.isMissingSource === true ||
              props.isMissingSource === undefined
                ? undefined
                : dashify(props.sourceName)
            }
          >
            {props.sourceName}
          </Itemlink>
        </div>
        <div className="border border-neutral-600/0 border-x-neutral-500/50 px-6 text-6xl content-center">
          +
        </div>
        <div className="text-2xl flex flex-col items-center text-center">
          <Image
            src={props.target}
            alt={props.targetName}
            className="min-h-20 min-w-20"
            width={0}
            height={0}
          />
          <Itemlink
            item={
              props.isMissingTarget === true ||
              props.isMissingTarget === undefined
                ? undefined
                : dashify(props.targetName)
            }
          >
            {props.targetName}
          </Itemlink>
        </div>
        <span className="border border-neutral-600/0 border-x-neutral-500/50 px-6 text-6xl content-center">
          =
        </span>
        <div className="text-2xl flex flex-col items-center text-center">
          <Image
            src={props.result}
            alt={props.resultName}
            className="min-h-20 min-w-20"
            width={0}
            height={0}
          />
          <Itemlink
            item={
              props.isMissingResult === true ||
              props.isMissingResult === undefined
                ? undefined
                : dashify(props.resultName)
            }
          >
            {props.resultName}
          </Itemlink>
        </div>
      </div>
      <div className="border border-neutral-600/0 border-t-neutral-500/70 mt-4 pt-3 text-(--warning)">
        this process requires {props.reqOne} ⚠
      </div>
    </div>
  );
}
