'use client'; // Composant côté client

import React, { useState } from "react";
import { Container, Flex, Box } from "theme-ui";
import { keyframes } from "@emotion/react";
import { Link } from "react-scroll";
import Logo from "../../components/logo";
import LogoDark from "../../assets/logo.svg";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import { useRouter } from "next/navigation";

export default function Header({ className }) {
  const router = useRouter();

  
  const handleContactClick = () => {
    router.push('/contact'); // Redirige vers la route correcte
  };

  const handleClick = (path) => {
    if (path === "/") {
      // Redirection vers la racine de la page sans recharger
      router.push('/');  // Cette ligne gère la redirection vers la racine
    } else {
      // Utilisation de react-scroll pour les autres chemins
      document.querySelector(`#${path}`)?.scrollIntoView({ 
        behavior: "smooth" 
      });
    }
  };

  return (
    <DrawerProvider>
      <Box sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                onClick={() => handleClick(path)}  // Appel de la fonction handleClick avec le path
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <button
              className="donate__btn"
              onClick={handleContactClick}
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(153, 102, 0, 0.57)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              Contactez-nous
            </button>
          </div>

          <MobileDrawer />
        </Container>
      </Box>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nav > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
};
