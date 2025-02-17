import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography, Box } from '@mui/material';
import portfolio from '../images/portfolio.jpg';
import { Bio } from './data/constants';
import { Typewriter } from 'react-simple-typewriter';
import {motion} from 'framer-motion';
import wavingHand from '../images/Waving Hand.gif'


export default function BasicGrid() {

  const [hovered, setHovered] = React.useState(false); // State for hover effect
 
  return (
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center" marginTop={5}>
        {/* Left Section for Text */}
      
        <Grid item xs={12} md={6}>
        {/* <motion.div initial ={{x:'-100vw'}} animate={{x:'0'}} transition={{ stiffness: 20 }}> */}
        <motion.div 
  initial={{ x: '-100vw' }} 
  animate={{ x: 0 }} 
  transition={{ duration: 0.8, ease: 'easeInOut' }}
>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Hi, I am <br />
              <span style={{ color: '#1976d2' }}>{Bio.name}</span>
            </Typography>
            <Typography variant="h6" component="p" sx={{ marginBottom: 2 }}>
              I am a{' '}
              <span style={{ color: '#f50057' }}>
                <Typewriter
                  words={Bio.roles}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </Typography>
            <Typography variant="body1" component="p">
            <p sx={{ verticalAlign: 'middle' }} /> {Bio.description}
            </Typography>
          </Box>
          </motion.div >
        </Grid>
       

        {/* Right Section for Image */}
        <Grid item xs={12} md={6}>
          {/* <motion.div initial={{x:'100vw'}} animate={{x:'0'}} transition={{ stiffness: 20 }}> */}
          <motion.div 
  initial={{ x: '100vw' }} 
  animate={{ x: 0 }} 
  transition={{ duration: 0.9, ease: 'easeInOut' }}
>
          <Box sx={{ textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',  // Ensures it takes the full height of the grid item
          textAlign: 'center',
          position: 'relative', // Necessary for positioning the GIF and text
          }}>
          <motion.img 
  src={portfolio}
  alt="Portfolio" 
  style={{
    width: '300px',         // Increased width for a larger circle
    height: '300px',        // Same height as width
    borderRadius: '50%',    // Makes it a circle
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    objectFit: 'cover',     // Ensures the image covers the circle without distortion
    cursor: 'pointer', // Makes the image look clickable
   
  }}
  whileHover={{
    scale: 1.1,
    rotate: 5,
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
  }}
  transition={{
    type: 'spring',
    stiffness: 200,
    damping: 10,
  }}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
/>



{hovered && ( 
   <motion.div
   style={{
     position: 'absolute',
     bottom: '-35px', // Position the GIF a little bit lower
    right: '-35px', // Position the GIF a little bit to the right
     //transform: 'translateY(-50%)',
     display: 'flex',
     alignItems: 'center',
    //  marginLeft: '20px', // Space between the images
     zIndex: 1, // Ensure the GIF and text are above the portfolio image
     backgroundColor: 'transparent',
   }}
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.3 }}
 >
                <img
                  src={wavingHand}// Path to your "Hello with Palm" GIF
                  alt="Hello with Palm"
                  style={{
                    width: '80px', // Smaller size for the gif
                    height: '80px',
                    objectFit:'cover'
                  }}
                />
                <Typography
                variant="h6"
                component="span"
                sx={{
                  marginLeft: 2,
                  fontWeight: 'bold',
                  color: '#1976d2', // Color for the text
                  display:'flex',
                  alignItems:'center',
                }}
              > Hi!!
              </Typography>
                </motion.div>
              )}

          </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}

//comment added
