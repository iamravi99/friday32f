import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AgeCheckModal from './Comp/AgeCheckModal'; // ✅ use here
import Home from './Comp/Home/Home';
import NewWeb from './Comp/NewWeb';
import NewWebDetail from './Comp/NewWebDetail';
import About from './Comp/About'; // Assuming you have an About component
import Layout from './Layout';
import UlluActresses from './Comp/UlluActresses';
import UlluActressDetail from './Comp/UlluActressDetail';
import Stories from './Comp/Stories';
import StoryDetail from './Comp/StoryDetail';
import DesiLeaks from './Comp/DesiLeaks';
import DesiLeakDetail from './Comp/DesiLeakDetail';
import Viral from './Comp/Viral';
import ViralDetail from './Comp/ViralDetail';
import AdminDashboard from './admin/AdminDashboard';
import AdminLogin from './admin/AdminLogin';
import WebseriesManager from './admin/WebseriesManager';
import StoriesManager from './admin/StoriesManager';
import UlluActressManager from './admin/UlluActressManager';
import DesiLeaksManager from './admin/DesiLeaksManager';
import ViralManager from './admin/ViralManager';


function App() {
  const [isAllowed, setIsAllowed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isAdminAuth, setIsAdminAuth] = useState(false);

  useEffect(() => {
    const isAdult = localStorage.getItem('isAdult');
    const adminAuth = localStorage.getItem('adminAuth');
    if (isAdult === 'true') setIsAllowed(true);
    if (adminAuth === 'true') setIsAdminAuth(true);
    setChecked(true);
  }, []);

  if (!checked) return null;

  return (
    <BrowserRouter>
      {!isAllowed && <AgeCheckModal onAccept={() => setIsAllowed(true)} />}
      {isAllowed && (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/newweb" element={<NewWeb />} />
            <Route path="/newweb/:id" element={<NewWebDetail />} />
           <Route path="/about" element={<About/>} />


<Route path="/ulluactresses" element={<UlluActresses />} />
<Route path="/actress/:id" element={<UlluActressDetail />} />

<Route path="/stories" element={<Stories />} />
<Route path="/stories/:id" element={<StoryDetail />} />
<Route path="/desileaks" element={<DesiLeaks />} />

<Route path="/desileaks/:id" element={<DesiLeakDetail />} />





 <Route path="/viral" element={<Viral />} />
          <Route path="/viral/:id" element={<ViralDetail />} />



{/* Admin Routes */}
<Route path="/singh/login" element={<AdminLogin onLogin={setIsAdminAuth} />} />
{isAdminAuth ? (
  <>
    <Route path="/singh" element={<AdminDashboard />} />
    <Route path="/singh/webseries" element={<WebseriesManager />} />
    <Route path="/singh/stories" element={<StoriesManager />} />
    <Route path="/singh/ulluactresses" element={<UlluActressManager />} />
    <Route path="/singh/desileaks" element={<DesiLeaksManager />} />
    <Route path="/singh/viral" element={<ViralManager />} />
  </>
) : (
  <Route path="/singh/*" element={<AdminLogin onLogin={setIsAdminAuth} />} />
)}













          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
