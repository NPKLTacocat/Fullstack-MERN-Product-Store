import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "./components/ui/color-mode";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Box minH="100vh" bg={useColorModeValue("cyan.50", "cyan.950")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Toaster />
    </Box>
  );
}

export default App;
