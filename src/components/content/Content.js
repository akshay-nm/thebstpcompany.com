import React, { useRef, forwardRef, useEffect } from 'react';
import Home from '../home/Home';
import WhyUs from '../why-us/WhyUs';
import Pricing from '../pricing/Pricing';
import ContactUs from '../contact-us/ContactUs';

const Section = forwardRef((props, ref) => (
  <div ref={ref}>
    {props.children}
  </div>
))

const Content = ({ changeSectionTo }) => {
  const sectionOneRef = useRef(null)
  const sectionTwoRef = useRef(null)
  const sectionThreeRef = useRef(null)
  const sectionFourRef = useRef(null)

  
  useEffect(() => {
    if(sectionOneRef.current && 
      sectionTwoRef.current &&
      sectionThreeRef.current)
      switch(changeSectionTo) {
        case 1: window.scrollTo({ top: sectionOneRef.current.offsetTop, left: 0, behavior: 'smooth' }); break;
        case 2: window.scrollTo({ top: sectionTwoRef.current.offsetTop, left: 0, behavior: 'smooth' }); break;
        case 3: window.scrollTo({ top: sectionThreeRef.current.offsetTop, left: 0, behavior: 'smooth' }); break;
        case 4: window.scrollTo({ top: sectionFourRef.current.offsetTop, left: 0, behavior: 'smooth' }); break;
        default: window.scrollTo({ top: sectionOneRef.current.offsetTop, left: 0, behavior: 'smooth' });
      }
  }, [changeSectionTo])

  return (
    <>
      <Section ref={sectionOneRef}><Home /></Section>
      <Section ref={sectionTwoRef}><WhyUs /></Section>
      <Section ref={sectionThreeRef}><Pricing /></Section>
      <Section ref={sectionFourRef}><ContactUs /></Section>
    </>
  );
};

export default Content;