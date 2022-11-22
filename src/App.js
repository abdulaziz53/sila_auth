import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
