import Portfolio from "./pages/portfolio/Portfolio";
import Nav from "./components/Nav/Nav";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./utils/theme.jsx";
import CssBaseLine from "@material-ui/core/CssBaseline";




function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
    <BrowserRouter basename="/robert-anderson">
    <Nav color={theme}/>
    <Routes>
      <Route path="/" element={<Portfolio />}/>
      <Route exact path="/portfolio" element={<Portfolio />} color={theme} />
      <Route exact path="/about" element={<About />} color={theme}/>
      <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
