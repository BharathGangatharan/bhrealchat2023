import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import "./index.css";
import ChatRoom from "./Pages/ChatRoom";
import Login from "./Pages/Login";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import ViewProfileModal from "./components/ViewProfileModal";
import MobileModal from "./components/MobileModal";

function App() {

  return (
    <AuthProvider className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Login/>} />

        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
      <ViewProfileModal/>
      <MobileModal/>
    </AuthProvider>
  );
}

export default App;
