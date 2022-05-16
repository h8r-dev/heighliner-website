import React from "react";

import Entry from "./Entry";

interface Props {
  entries: {
    title: string;
    content?: string | React.ReactElement;
    imgPath?: string;
  }[];
}

export default function Entries({ entries }: Props): React.ReactElement {
  return (
    <div>
      {entries.map((entry) => (
        <div key={entry.title}>
          <Entry entry={entry} />
        </div>
      ))}
    </div>
  );
}
