import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SingleProperty from './pages/SingleProperty';
import Home from './pages/Home';
import AgentPropertyPage from './pages/AgentPropertyPage';
import ViewAppointmentPage from './pages/ViewAppointmentPage';
import CreateProperties from './pages/CreateProperties';
import PropertiesStatus from './pages/AgentPropertyStatus';
import ViewWishlist from './pages/AgentViewWishlist';
import AgentSingleProperty from './pages/AgentSingleProperty';
import PropertyPageUser from './pages/UserPropertyPage';
import UserWishlist from './pages/UserWishlist';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/single-property" element={<SingleProperty />}/>
        <Route path="/properties-page" element={<PropertyPageUser />}/>
        <Route path="/view-wishlist" element={<UserWishlist />}/>
        

        <Route path="/agent-single-property" element={<AgentSingleProperty />}/>
        <Route path="/agent-properties" element={<AgentPropertyPage />}/>
        <Route path="/agent-appointments" element={<ViewAppointmentPage />}/>
        <Route path="/create-property" element={<CreateProperties />}/>
        <Route path="/property-status" element={<PropertiesStatus />}/>
        <Route path="/wishlist" element={<ViewWishlist />}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App