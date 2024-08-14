import React, { useState } from "react";

export default function Folder({ explorer }) {
  console.log(explorer);
  const [expand, setexpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <div className="Folder" onClick={() => setexpand(!expand)}>
          <span>📂 {explorer.name}</span>
        </div>
        <div
          className="file"
          style={{ paddingLeft: 25, display: expand ? "block" : "none" }}
        >
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span>🗄 {explorer.name}</span>;
  }
}
