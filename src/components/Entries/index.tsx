import React from "react";

import Entry, { EntryType } from "./Entry";

type EntriesType = EntryType[];

interface Props {
  entries: EntriesType;
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

export { EntriesType };
