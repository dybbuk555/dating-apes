import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import IsPrivate from "./components/IsPrivate";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<IsPrivate> <UserListPage /> </IsPrivate>} />
        <Route path="/users/:userId" element={<IsPrivate><UserDetailsPage /></IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;