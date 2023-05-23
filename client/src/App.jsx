import RegisterLogin from "./pages/RegisterLogin/ResisterLogin";
import Frontpage from "./pages/frontpage/Frontpage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <RegisterLogin />
    </ChakraProvider>
  );
}

export default App;
