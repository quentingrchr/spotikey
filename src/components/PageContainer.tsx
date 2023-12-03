import React from "react";
import Header from "./header/Header";
import { Session } from "next-auth";
import cn from "classnames";

interface Props {
  user?: NonNullable<Session["user"]>;
  children: React.ReactNode;
  horizontalMargin?: boolean;
}

export default function PageContainer({
  user,
  children,
  horizontalMargin = true,
}: Props) {
  const hasHeader = user;
  return (
    <div>
      {hasHeader && <Header user={user} />}
      <main
        className={cn(
          "flex min-h-screen flex-col items-center justify-between",
          {
            "mt-16": hasHeader,
            "px-16": horizontalMargin,
          }
        )}
      >
        {children}
      </main>
    </div>
  );
}
