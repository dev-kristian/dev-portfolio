import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Button, Card} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Element } from 'react-scroll';
import { FaReact, FaNodeJs, FaStripeS } from 'react-icons/fa';
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandPython, TbBrandVite, TbBrandTypescript } from "react-icons/tb";
import { SiFirebase, SiRedis, SiMui, SiChakraui } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import { red } from '@mui/material/colors';
import project1 from './assets/images/project1.png';
import project2 from './assets/images/project2.png';

// Define the Project interface
interface Project {
  name: string;
  description: string;
  image: string;
  details: string;
  liveDemo: string;
  github: string;
}

// Define the Skill interface
interface Skill {
  name: string;
  icon: React.ReactNode;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B71C1C',
    },
    background: {
      default: '#000000',
      paper: '#212121',
    },
  },
});

function App() {
  const [skills] = useState<Skill[]>([
    { name: 'JavaScript', icon: <RiJavascriptLine /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <TbBrandTypescript /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <TbBrandPython />},
    { name: 'Google Firebase', icon: <SiFirebase /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Vite.js', icon: <TbBrandVite /> },
    { name: 'Google Firestore', icon: <DiGoogleCloudPlatform /> },
    { name: 'ChakraUI', icon: <SiChakraui /> },
    { name: 'Material UI', icon: <SiMui /> },
    { name: 'Stripe API', icon: <FaStripeS /> },
  ]);

  const [projects] = useState<Project[]>([
    {
      name: 'Medcheck',
      description: 'AI-powered platform for interpreting medical analysis results. Utilizes advanced algorithms to provide accurate and timely interpretations.',
      image: project1,
      details: 'A comprehensive platform for interpreting medical analysis results using advanced AI algorithms.',
      liveDemo: 'https://medcheck.bio',
      github: 'https://github.com/dev-kristian/medcheck.bio-frontend',
    },
    {
      name: 'DivusAI',
      description: 'Create and interact with AI-powered virtual characters. Offers a unique experience in AI-driven conversation and character development.',
      image: project2,
      details: 'An innovative AI-powered platform for creating and interacting with virtual characters.',
      liveDemo: 'https://divusai.com',
      github: 'https://github.com/dev-kristian/divusai-client',
    },
  ]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Container sx={{ flex: '1 0 auto' }}>
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Card sx={{ padding: 2, borderRadius: 6, bgcolor: 'grey.900', color: 'white', borderColor: red[900] }}>
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

            <Element name="skills">
              <Typography variant="h4" mt={8} mb={4} color="white">
                Most Used Tools
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {skills.map((skill, index) => (
                  <Grid item xs={6} sm={4} md={3} key={index}>
                    <Button
                      startIcon={skill.icon}
                      disableRipple
                      disableElevation
                      variant="outlined"
                      sx={{
                        justifyContent: 'start',
                        borderRadius: 3,
                        bgcolor: 'grey.900',
                        color: 'white',
                        fontWeight: 'bold',
                        borderColor: 'grey.800',
                        ":hover": {
                          borderColor: 'primary.main',
                          bgcolor: 'rgba(183, 28, 28, 0.1)',
                          transform: 'translateY(-3px)',
                          transition: 'all 0.3s ease-in-out'
                        },
                        width: '100%',
                        height: '40px',
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      {skill.name}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Element>

            <Element name="projects">
              <Typography variant="h4" mt={8} mb={4} color="white">
                Projects
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ProjectCard 
                      project={project} 
                      onClick={() => handleProjectClick(project)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Element>

            <Element name="contact">
              <Typography variant="h4" mt={8} mb={4} color="white">
                Contact Me
              </Typography>
              <ContactForm />
            </Element>
          </Box>
        </Container>
        <Footer />
        {selectedProject && (
          <ProjectModal
            open={Boolean(selectedProject)}
            onClose={handleCloseModal}
            project={selectedProject}
          />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;