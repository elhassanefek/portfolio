import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { ProjectDetails } from "./pages/ProjectDetails";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
