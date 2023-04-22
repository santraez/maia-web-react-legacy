import GalleryText from "../components/GalleryText";
import Hero from "../components/Hero";
import HomeForm from "../components/HomeForm";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
// import SlideContainerHome from "../components/SlideContainerHome";

import useScreenSize from "../hooks/useScreenSize";
import { useEffect, useRef } from "react";

const Home = () => {
  const { width, } = useScreenSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ref = useRef(null);
  return (
    <>
    <Hero />
    <HomeSection1 />
    <HomeSection2 />
    {/* <SlideContainerHome /> */}
      <GalleryText />
    {(width >= 840) && (
      <div ref={ref} style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#F8F6F2',
      }}>
        <HomeForm />
      </div>
    )}
    </>
  );
};

export default Home;