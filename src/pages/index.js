import React from "react";
import styles from "./index.module.css";
import Footer from "../sections/Footer";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Achievements from "../sections/Achievements";
import Blog from "../sections/Blog";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
<<<<<<< HEAD
// import Design from "../sections/Design";
=======
import Design from "../sections/Design";
>>>>>>> afc2d14ec74216ca3ff66c5441a0cd8be43b8841
import Education from "../sections/Education";
import Hero from "../sections/Hero";
import Languages from "../sections/Languages";
import Music from "../sections/Music";
import Philanthropy from "../sections/Philanthropy";
<<<<<<< HEAD
// import Photography from "../sections/Photography";
=======
import Photography from "../sections/Photography";
>>>>>>> afc2d14ec74216ca3ff66c5441a0cd8be43b8841
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Skills from "../sections/Skills";
import Work from "../sections/Work";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className={`container ${styles.layout}`}>
        <Hero />
        <AboutMe />
        <div className={styles.workEducation}>
          <Work />
          <Education />
        </div>
        <Skills />
        <Projects />
        <Blog />
        <Languages />
        <div className={styles.achievementsCertificationPhilanthropy}>
          <div>
            <Achievements />
          </div>
          <div>
            <Certifications />
          </div>
          <div>
            <Philanthropy />
          </div>
        </div>
<<<<<<< HEAD
        {/* <Photography /> */}
        <Music />
        {/* <Design /> */}
=======
        <Photography />
        <Music />
        <Design />
>>>>>>> afc2d14ec74216ca3ff66c5441a0cd8be43b8841
        <Resume />
        <Contact />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
