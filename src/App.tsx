import { useState } from 'react';
import { Typography, Box, Container, Grid, Button,  Card, CardMedia, CardContent, } from '@mui/material';
import { FaReact, FaNodeJs, FaStripeS } from 'react-icons/fa';
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandPython,TbBrandVite,TbBrandTypescript } from "react-icons/tb";
import { SiFirebase, SiRedis,SiMui,SiChakraui } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";
import Header from './components/Header';
import Footer from './components/Footer';
import { red } from '@mui/material/colors';
import project1 from './assets/images/project1.png';
import project2 from './assets/images/project2.png';

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

  const [projects] = useState([
    {
      name: 'medcheck',
      description: 'Interpret medical analysis results using AI.',
      image: project1,
    },
    {
      name: 'DivusAI',
      description: 'Create, Generate and Chat with virtual AI characters.',
      image: project2,
    },
  ]);
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor:'black' }}>
      <Header/>
      <Container sx={{ flex: '1 0 auto' }}>
      <Box sx={{ py: 4, textAlign: 'center',  }}>
        <Card sx={{ padding: 2, borderRadius: 6, bgcolor:'grey.900', color:'white', borderColor:red[900],}}>
          <Typography variant="h5" component="h1" gutterBottom color={red[900]}>
            Kristian Aleksi
          </Typography>
          <Typography variant="h3" component="h2" gutterBottom>
            Full-Stack Web Developer
          </Typography>
          <Typography variant="body1">
            Development of responsive, functional and beautiful web applications that please their users, using the best practices and techniques in the market.
          </Typography>
        </Card>
  
        <Typography variant="h5" mt={4} component="h2" color={'white'} gutterBottom>
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
                borderRadius:3,
                bgcolor:'grey.900',
                color:'white',
                fontWeight:'bold',
                borderColor: 'black',
                ":hover":{borderColor:'red'},
                width: { xs: '100%'},
                height: { xs: '40px' }
              }}
            >
              {skill.name}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" mt={4} component="h2" color={'white'} gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth:500, bgcolor:'grey.900', color:'white' }}>
              <CardMedia
                component="img"
                height="220"
                sx={{objectFit:'contain'}}
                image={project.image}
                alt={project.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="grey.300">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
