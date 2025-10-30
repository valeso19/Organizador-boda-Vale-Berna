import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import SectionView from './components/SectionView';

const App = () => {
  const [currentSection, setCurrentSection] = useState(null);

  return (
    <div>
      {currentSection ? <SectionView sectionId={currentSection} /> : <Dashboard onSectionSelect={setCurrentSection} />}
    </div>
  );
};

export default App;