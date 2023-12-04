import Image from "next/image";
import React from "react";
import cn from "classnames";

function Track() {
  return (
    <div className="flex gap-3">
      <Image
        className="h-9 w-9"
        width={500}
        height={500}
        src="/artwork.jpeg"
        alt={`Cover artwork of`}
      />
      <div className="flex flex-col justify-between py-[2px]">
        <p className="text-sm font-semibold leading-none">Chicken Soup</p>
        <p className="text-sm font-thin leading-none">Skrillex, Habstrakt</p>
      </div>
    </div>
  );
}

function TextCell({ text, percent }: { text: string; percent?: number }) {
  return (
    <div className="flex flex-row items-center gap-3">
      <p className="text-lg font-thin leading-none">{text}</p>
      {percent && (
        <Badge percent={percent} title={"This is a percentage of accuracy"} />
      )}
    </div>
  );
}

function Badge({ percent, title }: { percent: number; title?: string }) {
  function getBadgeColor(percent: number) {
    if (percent <= 10) {
      return "bg-[#290000] text-red-600 border-red-600";
    } else if (percent < 30) {
      return "bg-[#231B01] text-yellow-600 border-yellow-600";
    } else if (percent >= 30) {
      return "bg-[#151816] text-green-600 border-green-600";
    }
  }
  return (
    <span
      title={title}
      className={cn(
        "text-[10px] px-1.5 py-1 border rounded border-1",
        getBadgeColor(percent)
      )}
    >
      {percent}%
    </span>
  );
}
function Item() {
  return (
    <div className="flex border-b-[1px] py-3.5 px-3 border-b-neutral-800 items-center gap-8">
      <Track />
      <TextCell text="C#" percent={13} />
      <TextCell text="Minor" percent={90} />
      <TextCell text="128" />
    </div>
  );
}

export default function Table() {
  return (
    <div className="mt-7">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}
