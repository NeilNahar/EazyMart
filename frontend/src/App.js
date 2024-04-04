import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import SignInSignUp from "./components/SignInSignUp";
function App() {
  const [showSignInSignUp, setShowSignInSignUp] = useState(false);
  return (
    <div className="App">
      {showSignInSignUp && <SignInSignUp setShowSignInSignUp={setShowSignInSignUp} />}
      <Navbar setShowSignInSignUp={setShowSignInSignUp} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
