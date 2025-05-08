import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Create from "./pages/create";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import { useColorModeValue } from "./components/ui/color-mode";

function App() {
  return (
    <Box minH="100vh" bg={useColorModeValue("cyan.50", "cyan.950")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Box>
  );
}

export default App;
