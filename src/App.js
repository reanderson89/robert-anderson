import Portfolio from "./pages/portfolio/Portfolio";
import Nav from "./components/Nav/Nav";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { Route, BrowserRouter, Routes, HashRouter} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./utils/theme.jsx";
import CssBaseLine from "@material-ui/core/CssBaseline";




function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
    <HashRouter >
    <Nav color={theme}/>
    <Routes>
      <Route path="/portfolio" element={<Portfolio />} color={theme} />
      <Route path="/about" element={<About />} color={theme}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Portfolio />}/>
      </Routes>
    </HashRouter>
    </ThemeProvider>
  );
}

export default App;
