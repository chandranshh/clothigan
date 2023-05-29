import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLogin from "./pages/RegisterLogin/ResisterLogin";
import Frontpage from "./pages/frontpage/Frontpage";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./features/store";
import Cart from "./pages/cart/Cart";
import MyAccount from "./pages/myAccount/MyAccount";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/membership" element={<RegisterLogin />} />
            <Route path="/products" element={<Frontpage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<MyAccount />} />
            <Route exact path="/" element={<Frontpage />} />
          </Routes>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
