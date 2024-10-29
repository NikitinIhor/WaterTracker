import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Animation from "./components/Animation/Animation";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import WelcomeHeader from "./components/WelcomeHeader/WelcomeHeader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const SigninPage = lazy(() => import("./pages/SigninPage/SigninPage"));
const SignupPage = lazy(() => import("./pages/SignupPage/SignupPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));

export default function App() {
  const location = useLocation();
  const isWelcomePage = location.pathname === "/welcome";

  const [showWrapper, setShowWrapper] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWrapper(true);
      setShowAnimation(false);
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showAnimation && <Animation />}

      <div className={`wrapper ${showWrapper ? "show" : ""}`}>
        <Suspense fallback={<Loader />}>
          {isWelcomePage ? <WelcomeHeader /> : <Header />}

          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/welcome" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
