import React, { useState } from "react";
import {
  Stack,
  Link as MuiLink,
  Toolbar,
  Typography,
  Container,
  AppBar,
  Button,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll"; // For scrolling to sections
import {motion} from 'framer-motion';


const pages = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const NavList = ({ onLinkClick, activePage, ...props }) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      gap={3}
      ml={{ xs: 3, sm: 0 }}
      mt={{ xs: 3, sm: 0 }}
      {...props}
    >
      {pages.map((page) => (
        <motion.div
        key={page.id}
        initial={{ opacity: 0, y: -20 }}  // Animation starts hidden and lifted up
          animate={{ opacity: 1, y: 0 }}    // Animates to visible and positioned normally
        whileHover={{
          scale: 1.1, // Slightly reduced scale for faster rendering
          y: -2, // Less vertical movement for a smoother effect
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)", // Softer shadow
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20,
          delay: pages.indexOf(page) * 0.2,  // Stagger the animation
          ease: "easeOut",
         }} // Spring transition for smooth interaction
      >
        <ScrollLink
          to={page.id}
          smooth={true}
          duration={500}
          spy={true}
          offset={-64}
          onClick={() => onLinkClick(page.id)}
        >
          <MuiLink
            sx={{
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: activePage === page.id ? "bold" : "normal",
              position: "relative",
              padding: "8px 12px",
              borderRadius: "8px",
              transition: "background-color 0.2s ease, border 0.2s ease", // Faster background and border transition
              border: activePage === page.id && activePage !== "" ? "2px solid #FFC107" : "none",
              "&:hover": {
                border: "2px solid #FFC107",
                backgroundColor: "rgba(131, 123, 123, 0.2)", // Softer background color
              },
            }}
          >
            {page.name}
          </MuiLink>
        </ScrollLink>
      </motion.div>      
      ))}
    </Stack>
  );
};




const Nav = () => {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(""); // Default active link
  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };


  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    setOpen(false); // Close drawer on mobile after clicking a link
  };


  return (
    <>
    
      <Button
        variant="text"
        onClick={toggleDrawer(true)}
        sx={{ color: "white", display: { xs: "flex", sm: "none" } }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          display: { xs: "inherit", sm: "none" },
        }}
      >
       
         <NavList onLinkClick={handleLinkClick} activePage={activePage} />
      </Drawer>
      <NavList
        onLinkClick={handleLinkClick}
        activePage={activePage}
        sx={{
          display: { xs: "none", sm: "inherit" },
        }}
      />
    </>
  );
};

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Stack direction="row" alignItems="center" gap={1}>
            <img src="https://img.icons8.com/?size=100&id=jN7U8BEXpjAr&format=png&color=000000" width="30" height="30" alt="portfoliogif"></img>
            <Typography variant="h6">PortFolio</Typography>
            </Stack>
            <Nav />
            
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;



