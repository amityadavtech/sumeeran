import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/ui/FloatingActions";
import Preloader from "./components/ui/Preloader";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Hair from "./pages/services/Hair";
import Skin from "./pages/services/Skin";
import Nails from "./pages/services/Nails";
import Makeup from "./pages/services/Makeup";
import Spa from "./pages/services/Spa";
import Bridal from "./pages/services/Bridal";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "@/pages/not-found";

// Scroll Progress Bar Component
function ScrollProgress() {
  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return <div id="scroll-progress" className="scroll-progress" />;
}

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/services/hair" component={Hair} />
          <Route path="/services/skin" component={Skin} />
          <Route path="/services/nails" component={Nails} />
          <Route path="/services/makeup" component={Makeup} />
          <Route path="/services/spa" component={Spa} />
          <Route path="/services/bridal" component={Bridal} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/booking" component={Booking} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
