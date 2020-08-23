import React from 'react';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import WhyUs from './components/why-us/WhyUs';
import Pricing from './components/pricing/Pricing';
import ContactUs from './components/contact-us/ContactUs';

function App() {
  return (
    <div className='w-full h-full flex flex-col bg-primary font-body'>
      <Navigation />
      <Home />
      <WhyUs />
      <Pricing />
      <ContactUs />
    </div>
  );
}

export default App;
