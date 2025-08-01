import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AgeCheckModal from './Comp/AgeCheckModal'; // ✅ use here
import Home from './Comp/Home/Home';
import NewWeb from './Comp/NewWeb';
import NewWebDetail from './Comp/NewWebDetail';
import Storie from './Comp/Storie';
import StorieDetail from './Comp/StorieDetail';
import Layout from './Layout';
import HotBhabi from './Comp/HotBhabi';
import HotBhabiDetail from './Comp/HotBhabiDetail';
import About from './Comp/About';
import DesiMasala from './Comp/DesiMasala';
import DesiMasalaDetail from './Comp/DesiMasalaDetail';
import Ullu from './Comp/Ullu';
import UlluDetail from './Comp/UlluDetail';
import HotPics from './Comp/HotPics';
import HotPicsDetail from './Comp/HotPicsDetail';

function App() {
  const [isAllowed, setIsAllowed] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const isAdult = localStorage.getItem('isAdult');
    if (isAdult === 'true') setIsAllowed(true);
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
            <Route path="/stories" element={<Storie />} />
            <Route path="/storie/:id" element={<StorieDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/hotbhabi" element={<HotBhabi />} />
            <Route path="/hotbhabi/:id" element={<HotBhabiDetail />} />
            <Route path="/desimasala" element={<DesiMasala />} />
            <Route path="/desimasala/:id" element={<DesiMasalaDetail />} />
            <Route path="/ullu" element={<Ullu />} />
            <Route path="/ullu/:id" element={<UlluDetail />} />
            <Route path="/hotpics" element={<HotPics />} />
            <Route path="/hotpics/:id" element={<HotPicsDetail />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
