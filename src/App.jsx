import { useState } from "react";
// import Folder from "./components/Folder";
import explorer from "./data/folderData";
import ComponentFunction from "./components/ComponentFunction";
import ComponentClass from "./components/ComponentClass";

function App() {
  const [explorerData, setexplorer] = useState(explorer);

  return (
    <>
      {/* <Folder explorer={explorerData} /> */}
      <ComponentFunction />
      <ComponentClass />
    </>
  );
}

export default App;
