import Button from "blocks/button";
import React from "react";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Button>Primary</Button>
    </ThemeProvider>
  );
}

export default App;
