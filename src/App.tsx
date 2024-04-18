import { useState } from 'react';
import { Typography, Box, Container, Grid, Button,  Card } from '@mui/material';
import { FaReact, FaNodeJs, FaStripeS } from 'react-icons/fa';
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandPython,TbBrandVite,TbBrandTypescript } from "react-icons/tb";
import { SiFirebase, SiRedis,SiMui,SiChakraui } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";

function App() {
  
  // Define skills with useState for future updates
  const [skills] = useState([
    { name: 'JavaScript', icon: <RiJavascriptLine /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <TbBrandTypescript /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <TbBrandPython />},
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Vite.js', icon: <TbBrandVite /> },
    { name: 'Google Cloud', icon: <DiGoogleCloudPlatform /> },
    { name: 'ChakraUI', icon: <SiChakraui /> },
    { name: 'Material UI', icon: <SiMui /> },
    { name: 'Stripe', icon: <FaStripeS /> },
  ]);

  return (
    <Container>
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Card sx={{ padding: 2, borderRadius: 6, boxShadow: 3 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Filan Fisteku
          </Typography>
          <Typography variant="h3" component="h2" gutterBottom>
            Full-Stack Web Developer
          </Typography>
          <Typography variant="body1">
            Development of responsive, functional and beautiful web applications that please their users, using the best practices and techniques in the market.
          </Typography>
        </Card>
  
        <Typography variant="h5" mt={4} component="h2" gutterBottom>
          Most used tools
        </Typography>
        <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Button
              startIcon={skill.icon}
              disableRipple
              disableElevation
              variant="outlined"
              sx={{
                justifyContent:'start',
                color:'black',
                fontWeight:'bold',
                borderColor:'black',
                width: { xs: '100%'},
                height: { xs: '40px' }
              }}
            >
              {skill.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Container>
  );
}

export default App;
