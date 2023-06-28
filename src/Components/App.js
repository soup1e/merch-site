import React from "react";
import Header from "./Header";
import ItemControl from "./ItemControl";

function App() {
  return (
    <React.Fragment>
      <div className="bg-gray-700 h-screen">
        <Header />
        <ItemControl />
      </div>
    </React.Fragment>
  );
}

export default App;
