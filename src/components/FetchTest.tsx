import { SCOPES } from "@/constants/spotify";
import React from "react";

export default async function FetchTest({
  accessToken,
}: {
  accessToken: string;
}) {
  const res = await fetch("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();

  // console.log(data);

  return <div>FetchTest</div>;
}
