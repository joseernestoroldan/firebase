import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Account from "./pages/Account";
import Signin from "./pages/Signin";
import Home from "./pages/Inicio";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Protected><Account /></Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
