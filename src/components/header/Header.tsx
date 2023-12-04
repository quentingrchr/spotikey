import { User } from "@/types";
import { Session } from "next-auth";
import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";
import Search from "./Search";

interface Props {
  user: NonNullable<Session["user"]>;
}

function Avatar({ img }: { img: string }) {
  return (
    <div className="flex-shrink-0">
      <img className="h-6 w-6 rounded-full" src={img} alt="" />
    </div>
  );
}
export default function Header({ user }: Props) {
  const { name, image, email } = user;
  return (
    <header className="px-12 bg-gray-900 top-0 fixed w-full h-16 flex justify-between items-center border-b-neutral-600 border-b">
      {/* Left side */}
      <div className="flex justify-between items-center gap-20">
        <Image src="/artwork.png" alt="logo" height={30} width={30} />
        <div className="flex items-center">
          <Navigation />
        </div>
      </div>
      {/* Right side */}
      <div className="flex items-center gap-6">
        <Search />
        {image && <Avatar img={image} />}
      </div>
    </header>
  );
}
