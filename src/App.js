import React, { useState } from 'react';
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';

function App() {
  const [current, setCurrent] = useState(0)
  const [navigationShouldBeLight, setNavigationShouldBeLight] = useState(false)
  return (
    <div className='w-full h-full flex flex-col bg-primary font-body'>
      <Content changeSectionTo={current} shouldNavigationBeLight={setNavigationShouldBeLight} />
      <Navigation changeSection={setCurrent} shouldBeLight={navigationShouldBeLight} />
    </div>
  );
}

export default App;
