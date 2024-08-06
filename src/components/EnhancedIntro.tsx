import React from 'react';
import { Typography, Box, Container, Grid, useTheme, useMediaQuery, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { Link } from 'react-scroll';
import user_photo from '../assets/images/image.png';

const ModernEnhancedIntro: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={user_photo}
                alt="Kristian"
                sx={{
                  width: '100%',
                  maxWidth: 450,
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant={isMobile ? 'h2' : 'h2'} gutterBottom sx={{ fontWeight: 'bold' }}>
                Kristian Aleksi
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'medium' }}>
                Full-Stack Web Developer
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', maxWidth: '600px', mb: 4 }}>
                Crafting responsive, functional, and beautiful web applications 
                that delight users. Leveraging industry best practices and 
                cutting-edge techniques to bring visions to life in the digital realm.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<GitHub />}
                  href="https://github.com/dev-kristian"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LinkedIn />}
                  href="https://www.linkedin.com/in/kristian-aleksi/"
                  target="_blank"
                >
                  LinkedIn
                </Button>
                <Link
                  to="contact-section"
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Email />}
                  >
                    Contact Me
                  </Button>
                </Link>
              </Box>
            </motion.div>
          </Grid>
          
        </Grid>
      </Container>

      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        sx={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '100px',
          height: '150px',
          borderRadius: '50%',
          background: theme.palette.secondary.main,
          filter: 'blur(80px)',
          opacity: 0.1,
        }}
      />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: theme.palette.primary.main,
          filter: 'blur(100px)',
          opacity: 0.1,
        }}
      />
    </Box>
  );
};

export default ModernEnhancedIntro;