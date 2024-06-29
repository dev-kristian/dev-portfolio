// App.tsx
import { useState } from 'react';
import { Typography, Box, Container, Grid, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import SkillsSection from './components/SkillsSection';
import EnhancedIntro from './components/EnhancedIntro';
import ModernContactSection from './components/ModernContactSection';

import project1 from './assets/images/project1.png';
import project2 from './assets/images/project2.png';
// Define the Project interface
interface Project {
  name: string;
  description: string;
  image: string;
  details: JSX.Element;
  liveDemo: string;
  github: string;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B71C1C',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#212121',
    },
  },
});

function App() {
  const [projects] = useState<Project[]>([
    {
      name: 'Medcheck',
      description: 'AI-powered platform for interpreting medical analysis results. Utilizes advanced algorithms to provide accurate and timely interpretations.',
      image: project1,
      details: (
        <Box>
          <Typography variant="body1" paragraph>
            Medcheck is an innovative platform designed to revolutionize the way individuals access medical information and support. Leveraging the power of artificial intelligence, Medcheck provides comprehensive medical interpretations and real-time chat functionalities. Users can receive personalized insights and engage in meaningful conversations with our AI medical assistant, ensuring they have access to reliable medical information and guidance at their fingertips.
          </Typography>
          <Typography variant="body2" component="div">
            <strong>Key Features:</strong>
            <ul>
              <li>AI-Powered Medical Interpretations: Our advanced AI analyzes medical data to provide accurate and personalized interpretations, helping users understand their health conditions better.</li>
              <li>Real-Time Chat: Engage in interactive and informative conversations with our AI medical assistant, available 24/7 to answer your health-related questions.</li>
              <li>Parameter-Specific Graphs: Visualize your health data with detailed graphs that track specific parameters over time. Monitor your progress and gain insights through comprehensive graphical representations.</li>
              <li>User-Friendly Interface: Navigate through an intuitive and easy-to-use platform designed to provide a seamless user experience.</li>
              <li>Confidential and Secure: Medcheck ensures that all user data is kept confidential and secure, adhering to the highest standards of privacy and data protection.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            Medcheck aims to democratize access to medical knowledge, making it easier for everyone to stay informed about their health and well-being. Whether you need quick answers to your medical queries or a detailed analysis of your health data, Medcheck is your go-to AI medical assistant.
          </Typography>
        </Box>
      ),
      liveDemo: 'https://medcheck.bio',
      github: 'https://github.com/dev-kristian/medcheck.bio-frontend',
    },
    {
      name: 'DivusAI',
      description: 'Create and interact with AI-powered virtual characters. Offers a unique experience in AI-driven conversation and character development.',
      image: project2,
      details: (
        <Box>
          <Typography variant="body1" paragraph>
            DivusAI is a cutting-edge platform that opens up a world of creativity and interaction with artificial intelligence. Designed for enthusiasts, creators, and curious minds alike, DivusAI allows users to create, explore, and engage in dynamic conversations with a variety of AI characters. With DivusAI, the boundaries of imagination are expanded, offering an immersive and interactive experience like never before.
          </Typography>
          <Typography variant="body2" component="div">
            <strong>Key Features:</strong>
            <ul>
              <li>Create AI Characters: Craft unique AI characters with customizable personalities, traits, and backgrounds. Bring your creative visions to life with our intuitive character creation tools.</li>
              <li>Explore Diverse Worlds: Discover a vast array of AI-generated worlds and narratives. Each AI character brings a unique perspective and story, enriching your exploration experience.</li>
              <li>Engage in AI Chats: Enjoy interactive and meaningful conversations with your AI characters. Whether for entertainment, education, or companionship, our AI characters are designed to engage in thoughtful dialogue.</li>
              <li>User-Friendly Platform: Navigate through an easy-to-use interface that makes creating and interacting with AI characters seamless and enjoyable.</li>
              <li>Personalization: Tailor your AI interactions to match your preferences and interests, ensuring a highly personalized and engaging experience.</li>
              <li>Privacy and Security: DivusAI prioritizes user privacy and data security, ensuring that your interactions and creations are protected at all times.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            DivusAI transforms the way users interact with artificial intelligence, making it accessible, engaging, and fun. Dive into a world where your imagination is the limit, and experience the future of AI interaction with DivusAI.
          </Typography>
        </Box>
      ),
      liveDemo: 'https://divusai.com',
      github: 'https://github.com/dev-kristian/divusai-client',
    }
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
        <EnhancedIntro />  
        <Container sx={{ flex: '1 0 auto' }}>
          <Box sx={{ py: 4 }}>

            <SkillsSection />
            
            <Typography variant="h4" mt={8} mb={4} color="white" textAlign="center" id="projects">
              Projects
            </Typography>
            <Grid container spacing={8} justifyContent="center">
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} xl={6} key={index}>
                  <ProjectCard 
                    project={project} 
                    onClick={() => handleProjectClick(project)}
                  />
                </Grid>
              ))}
            </Grid>

            <ModernContactSection />

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
