import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SingleProperty from './pages/SingleProperty';
import Home from './pages/Home';
import AgentPropertyPage from './pages/AgentPropertyPage';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/single-property" element={<SingleProperty />}/>

        <Route path="/agent-property-details" element={<AgentPropertyPage />}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App