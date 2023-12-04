import React from "react";
import Header from "./Header";
import Table from "./Table";

export default function MusicCollectionHeader() {
  return (
    <div className="mt-12 w-full">
      <Header
        title="Dance/Electronic Mix"
        cover="/cover.png"
        type="playlist"
        songsCount={10}
        featuredArtists={["Skrillex", "Habstrakt", "Zeds Dead"]}
      />
      <Table />
    </div>
  );
}
