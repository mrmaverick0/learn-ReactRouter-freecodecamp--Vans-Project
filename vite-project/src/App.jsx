import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPrice from "./pages/Host/HostvanPrice";
import HostVanPhoto from "./pages/Host/HostVanPhoto";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nested Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          {/* Nested Routes */}
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans/>} />
            <Route path="vans/:id" element={<HostVanDetails/>} >
              <Route index element={<HostVanInfo/>} />
              <Route path="price" element={<HostVanPrice/>} />
              <Route path="photo" element={<HostVanPhoto/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
