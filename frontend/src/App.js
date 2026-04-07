import "@/App.css";
import "./i18n";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AdminApp from "./admin/AdminApp";
import About from "./pages/About";
import Mahamana from "./pages/Mahamana";
import Objectives from "./pages/Objectives";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Join from "./pages/Join";
import Donation from "./pages/donation";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import VideoTour from "./pages/VideoTour";
import Store from "./pages/Store";

function Shell() {
  const location = useLocation();
  const admin = location.pathname.startsWith("/admin");

  return (
    <>
      {!admin && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mahamana" element={<Mahamana />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/video-tour" element={<VideoTour />} />
          <Route path="/store" element={<Store />} />
          <Route path="/join" element={<Join />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </main>
      {!admin && <Footer />}
      <Toaster position="top-right" richColors />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Shell />
      </BrowserRouter>
    </div>
  );
}

export default App;
