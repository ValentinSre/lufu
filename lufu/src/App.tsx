// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemoryList from './components/MemoryList';
import Memory from './components/Memory';
import MainFeaturedPost from './components/MainFeaturedPost';
import CustomAppBar from './components/global-components/CustomAppBar';
import FooterShortcuts from './components/global-components/FootShortcuts';
import MaPhoto from './static/images/main-picture.jpg';
import memories from './static/texts/global-memories';

function App(): JSX.Element {
  const mainFeaturedPost = {
    title: 'À nos souvenirs',
    description:
      "Parce que chaque moment passé ensemble est un souvenir inoubliable qui mérite d'être partagé.",
    image: MaPhoto,
    imageText: 'main image description',
    linkText: '',
  };

  return (
    <Router>
      <div>
        <CustomAppBar />
        <MainFeaturedPost post={mainFeaturedPost} />
        <Routes>
          <Route path="/" element={<MemoryList memories={memories} />} />
          <Route path="/memory/:id" element={<Memory />} />
        </Routes>
        <footer>
          <FooterShortcuts />
        </footer>
      </div>
    </Router>
  );
}

export default App;
