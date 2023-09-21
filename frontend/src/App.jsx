import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import NotFoundPage from "./pages/NotFound";
import UserContext from "./contexts/current-user-context";
import { checkForLoggedInUser } from "./adapters/auth-adapter";
import UsersPage from "./pages/Users";
import UserPage from "./pages/User";
import SiteFooter from "./components/footer";
import ConcertDetailPage from "./pages/ConcertDetailPage";
import EventDetailPage from './pages/EventDetailPage';

export default function App() {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <>
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/concert/:id" element={<ConcertDetailPage />} />
            <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      
    </div>
    <SiteFooter/>
    </>
  );
}
