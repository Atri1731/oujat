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
import ComparePage from "./pages/ComparePage";
import ForgotPassword from "./pages/ForgotPassword";
import AccountType from "./pages/AccountType";
import Register from "./pages/Register";
import AgentGuide from "./pages/AgentGuide";
import WarehouseServices from "./pages/WarehouseServices";
import CustomServices from "./pages/CustomService";
import PortAgent from "./pages/PortAgent";
import Brokerage from "./pages/Brokerage";
import TransportPage from "./pages/TransportPage";

function Layout() {
  const location = useLocation();

  // hide header on login pages
  const hideHeader =
    location.pathname === "/customer-login" ||
    location.pathname === "/agent-login" ||
    location.pathname === "/register";


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
        <Route path="/compare" element={<ComparePage />} />
        

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/register" element={<Register />} />
        <Route path="/agent-guide" element={<AgentGuide />} />
        <Route path="/warehouse-services" element={<WarehouseServices />} />
        <Route path="/custom-services" element={<CustomServices />} />
        <Route path="/port-agent" element={<PortAgent />} />
        <Route path="/brokerage" element={<Brokerage />} />
        <Route path="/transport-page" element={<TransportPage />}/>


          
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