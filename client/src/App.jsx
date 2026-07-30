import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditProperty from "./pages/EditProperty";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Favourite from "./pages/Favourite";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import AddProperty from "./pages/AddProperty";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit-property/:id" element={<EditProperty />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
