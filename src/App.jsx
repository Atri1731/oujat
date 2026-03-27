import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DataInsights from "./components/DataInsights";
import LiveRequests from "./components/LiveRequests";
import FeaturedServices from "./components/FeaturedServices";
import WhyOujat from "./components/WhyOujat";
import Footer from "./components/Footer";

import CustomerLogin from "./pages/CustomerLogin";
import AgentLogin from "./pages/AgentLogin";
import Subscription from "./pages/Subscription";
import Dashboard from "./pages/Dashboard";
import InternationalTransport from "./pages/InternationalTransport";



function Layout() {
  const location = useLocation();

  // hide header on login pages
  const hideHeader =
    location.pathname === "/customer-login" ||
    location.pathname === "/agent-login";

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <DataInsights />
              <LiveRequests />
              <FeaturedServices />
              <WhyOujat />
              <Footer />
            </>
          }
        />

        {/* LOGIN PAGES */}
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/agent-login" element={<AgentLogin />} />
        <Route path="/subscription" element={<Subscription />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/international-transport" element={<InternationalTransport />} />
          
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;