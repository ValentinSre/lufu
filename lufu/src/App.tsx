// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemoryList from './components/MemoryList';
import Memory from './components/Memory';
import CustomAppBar from './components/global-components/CustomAppBar';
import Quiz from './components/Quiz';
import FooterShortcuts from './components/global-components/FootShortcuts';
import memories from './texts/global-memories';

function App(): JSX.Element {

  return (
    <Router>
      <div>
        <CustomAppBar />
        <Routes>
          <Route path="/" element={<MemoryList memories={memories} />} />
          <Route path="/memory/:id" element={<Memory />} />
          <Route path="/enigmas" element={<Quiz />} />
        </Routes>
        <footer>
          <FooterShortcuts />
        </footer>
      </div>
    </Router>
  );
}

export default App;
