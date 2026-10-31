import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/ProjectPage";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollManager } from "./components/layout/ScrollManager";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Framer Motion skips transform/layout animations when the OS asks for reduced motion */}
      <MotionConfig reducedMotion="user">
        <GlobalStyles />
        <ScrollManager />
        <Header />

        <main id="main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Routes>
        </main>

        <Footer />
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
