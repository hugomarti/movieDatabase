import React from "react";
import { Box } from "@chakra-ui/core";

import Navbar from "./components/Navbar";
import Movies from "./components/Movies";

function App() {
  return (
    <Box>
      <Navbar />
      <Movies />
    </Box>
  );
}

export default App;
