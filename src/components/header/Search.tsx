"use client";
import React from "react";
import { Input } from "../ui/Input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import cn from "classnames";

export default function Search() {
  const input = React.useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <div
      className={cn(
        "bg-gray-700 flex grap-2 items-center px-2 rounded min-w-[300px]",
        {
          "ring-1 ring-brand": isFocused,
        }
      )}
    >
      <MagnifyingGlassIcon className="h-4 w-4 text-muted-text" />
      <Input
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        ref={input}
        placeholder="Search"
        className="ring-transparent"
      />
    </div>
  );
}
