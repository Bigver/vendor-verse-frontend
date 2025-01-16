import Footer from '../../components/main/Footer'
import Content1 from '../../components/main/home/Content1'
import Content2 from '../../components/main/home/Content2'
import Content4 from '../../components/main/home/Content4'
import Content5 from '../../components/main/home/Content5'
import Navbar from '../../components/main/Navbar'
import React, { useEffect, useRef , useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Content_1 from '../../components/main/home/Content3/Content_1'
import Content_2 from '../../components/main/home/Content3/Content_2'
import Content_3 from '../../components/main/home/Content3/Content_3'

const HomePage: React.FC = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [fadeOutIndex, setFadeOutIndex] = useState<number | null>(null);
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        scrollToNextSection();
      } else {
        scrollToPreviousSection();
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSectionIndex = sectionsRef.current.findIndex(
      (section) => section && section.getBoundingClientRect().top > window.innerHeight / 2
    );
    if (nextSectionIndex !== -1 && sectionsRef.current[nextSectionIndex]) {
      scroll.scrollTo(sectionsRef.current[nextSectionIndex]!.offsetTop, {
        duration: 1000,
        smooth: 'easeInOutQuart',
      });
    }
    setFadeOutIndex(nextSectionIndex - 1);
  };

  const scrollToPreviousSection = () => {
    const previousSectionIndex = [...sectionsRef.current].reverse().findIndex(
      (section) => section && section.getBoundingClientRect().bottom < window.innerHeight / 2
    );
    if (previousSectionIndex !== -1 && sectionsRef.current[sectionsRef.current.length - 1 - previousSectionIndex]) {
      scroll.scrollTo(sectionsRef.current[sectionsRef.current.length - 1 - previousSectionIndex]!.offsetTop, {
        duration: 1000,
        smooth: 'easeInOutQuart',
      });
    }
  };
  let nav = "navbar-ctn"
  if (fadeOutIndex===4 || fadeOutIndex===5 || fadeOutIndex===6){
    nav = "nav-dark"
  }
  return (
    <div className="app">
      <Navbar nav={nav} />
      <div className="home-ctn">
        <div className="content-1" ref={(el) => (sectionsRef.current[0] = el)}>
          <Content1 />
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)}>
          <Content2 />
        </div>
        <section className='content-3'>
          <div className="feature-ctn">
            <div ref={(el) => (sectionsRef.current[2] = el)}>
              <Content_1/>      
            </div>
            <div ref={(el) => (sectionsRef.current[3] = el)}>
              <Content_2/>      
            </div>
            <div ref={(el) => (sectionsRef.current[4] = el)}>
              <Content_3/>      
            </div>
          </div>
        </section>
        <div ref={(el) => (sectionsRef.current[5] = el)}>
          <Content4 />
        </div>
          <Content5 />
          <Footer />
      </div>
    </div>

  )
}

export default HomePage