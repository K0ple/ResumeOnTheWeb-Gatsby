import Tooltip from "@material-ui/core/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { animateScroll as scroll } from "react-scroll";
import ThemeContext from "../context/ThemeContext";
import { IoIosMoon, IoIosSunny } from "./Icons";
=======
import { animateScroll as scroll, scroller } from "react-scroll";
import ThemeContext from "../context/ThemeContext";
import sections from "../data/sections";
import { IoIosMoon, IoIosSunny, MdMenu } from "./Icons";
>>>>>>> afc2d14ec74216ca3ff66c5441a0cd8be43b8841
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { dark, toggleDark } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  const scrollToTop = () =>
    scroll.scrollToTop({
      delay: 50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

<<<<<<< HEAD
=======
  const scrollTo = id =>
    scroller.scrollTo(id, {
      delay: 50,
      offset: -50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const SectionLink = x => {
    const Icon = x.icon;

    return (
      <Tooltip title={x.title} placement="right" arrow>
        <div key={x.id} onClick={() => scrollTo(x.id)}>
          <Icon />
        </div>
      </Tooltip>
    );
  };

>>>>>>> afc2d14ec74216ca3ff66c5441a0cd8be43b8841
  return (
    <div
      className={`${styles.container} animated ${
        isMobile ? "fadeInDown" : "fadeInLeft"
      }`}
    >
      <Tooltip title="Go to Top" placement="right" arrow>
        <div className="flex-center cursor-pointer" onClick={scrollToTop}>
          <GatsbyImage className="grayscale" {...data.icon.childImageSharp} />
        </div>
      </Tooltip>

<<<<<<< HEAD
=======
      <div className="hidden md:flex flex-col justify-center items-center">
        <div className={styles.menu}>
          <MdMenu />
        </div>
        <div className={styles.sectionLinks}>{sections.map(SectionLink)}</div>
      </div>

>>>>>>> afc2d14ec74216ca3ff66c5441a0cd8be43b8841
      <Tooltip title="Toggle Dark Mode" placement="right" arrow>
        <div
          className="flex-center cursor-pointer hover:text-primary-500"
          onClick={toggleDark}
        >
          {dark ? <IoIosMoon /> : <IoIosSunny />}
        </div>
      </Tooltip>
    </div>
  );
};

export default Navigation;
