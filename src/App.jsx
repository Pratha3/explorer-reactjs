import { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/folderData";

function App() {
  const [explorerData, setexplorer] = useState(explorer);

  return (
    <>
      <Folder explorer={explorerData} />
    </>
  );
}

export default App;
