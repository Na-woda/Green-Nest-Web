
import { Routes, Route, Navigate } from 'react-router-dom';
import PlantGuide from '../pages/PlantGuide';
import About from '../pages/About';
import GuideHero from '../pages/GuideHero';
import GuideDetailsPage from '../pages/GuideDetailsPage';



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PlantGuide />} />
      <Route path="/about" element={<About />} />
      <Route path="/guide" element={<GuideHero />} />
      <Route path="/guides/:id" element={<GuideDetailsPage />} />
      <Route path="*" element={<PlantGuide />} />
    </Routes>
  );
}
