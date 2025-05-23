import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import TeamsPage from './pages/TeamsPage';
import CodeRoomPage from './pages/CodeRoomPage';
import ProfilePage from './pages/ProfilePage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-[#00FFAA] to-[#FF00AA] text-transparent bg-clip-text animate-pulse">
          ProjectPulse
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-950 text-gray-200">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/projects"
                element={
                  <>
                    <SignedIn>
                      <ProjectsPage />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                }
              />
              <Route
                path="/teams"
                element={
                  <>
                    <SignedIn>
                      <TeamsPage />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                }
              />
              <Route
                path="/code-room"
                element={
                  <>
                    <SignedIn>
                      <CodeRoomPage />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <SignedIn>
                      <ProfilePage />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;