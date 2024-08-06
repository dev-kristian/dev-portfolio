import React, { useState } from 'react';
import { Typography, Box, Grid, Tooltip, LinearProgress, Paper, IconButton, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Element } from 'react-scroll';
import { FaReact, FaNodeJs, FaStripeS } from 'react-icons/fa';
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandPython, TbBrandVite, TbBrandTypescript } from "react-icons/tb";
import { SiFirebase, SiRedis, SiMui, SiChakraui, SiOpenai, SiFlask, SiScrapy, SiSelenium } from "react-icons/si";
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { BsClipboardData } from "react-icons/bs";

interface Skill {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
  description: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'data';
}

type ExpandMoreProps = {
    expand: boolean;
    onClick: () => void;
    'aria-expanded': boolean;
    'aria-label': string;
    children: React.ReactNode;
  };
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })<ExpandMoreProps>(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        height: '100%',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: (theme) => `0 8px 16px ${theme.palette.primary.main}40`,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }}>{skill.icon}</Box>
        <Typography variant="h6">{skill.name}</Typography>
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
        <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Proficiency
        </Typography>
        <LinearProgress
          variant="determinate"
          value={skill.proficiency}
          sx={{
            height: 8,
            borderRadius: 5,
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
              backgroundColor: 'primary.main',
            },
          }}
        />
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography variant="body2">{skill.description}</Typography>
      </Collapse>
    </Paper>
  );
};

const SkillsSection: React.FC = () => {
  const [skills] = useState<Skill[]>([
    { name: 'JavaScript', icon: <RiJavascriptLine />, proficiency: 70, description: 'Extensive experience in modern JavaScript development, including ES6+ features.', category: 'frontend' },
    { name: 'React', icon: <FaReact />, proficiency: 70, description: 'Proficient in building complex, responsive UIs with React and its ecosystem.', category: 'frontend' },
    { name: 'TypeScript', icon: <TbBrandTypescript />, proficiency: 50, description: 'Strong typing skills, improving code quality and maintainability.', category: 'frontend' },
    { name: 'Node.js', icon: <FaNodeJs />, proficiency: 60, description: 'Skilled in server-side JavaScript, building RESTful APIs and microservices.', category: 'backend' },
    { name: 'Python', icon: <TbBrandPython />, proficiency: 70, description: 'Experienced in data analysis, scripting, and backend development with Python.', category: 'backend' },
    { name: 'Flask Python', icon: <SiFlask />, proficiency: 65, description: 'Skilled in developing web applications and APIs using Flask framework in Python.', category: 'backend' },
    { name: 'Firebase', icon: <SiFirebase />, proficiency: 65, description: 'Proficient in using Firebase for authentication, real-time database, and hosting.', category: 'database' },
    { name: 'Redis', icon: <SiRedis />, proficiency: 60, description: 'Experienced in using Redis for caching and as a cache database.', category: 'database' },
    { name: 'Vite.js', icon: <TbBrandVite />, proficiency: 70, description: 'Skilled in using Vite for fast and efficient frontend tooling.', category: 'tools' },
    { name: 'Chakra UI', icon: <SiChakraui />, proficiency: 70, description: 'Proficient in building accessible and customizable UIs with Chakra UI.', category: 'frontend' },
    { name: 'Material UI', icon: <SiMui />, proficiency: 70, description: 'Extensive experience in creating polished UIs with Material UI components.', category: 'frontend' },
    { name: 'Stripe API', icon: <FaStripeS />, proficiency: 60, description: 'Experienced in implementing secure payment solutions with Stripe.', category: 'tools' },
    { name: 'OpenAI API', icon: <SiOpenai />, proficiency: 80, description: 'Familiar with OpenAI API for natural language processing and AI-powered applications.', category: 'tools' },
    { name: 'Scrapy', icon: <SiScrapy />, proficiency: 65, description: 'Proficient in web scraping and data extraction using Scrapy framework.', category: 'data' },
    { name: 'Selenium', icon: <SiSelenium />, proficiency: 60, description: 'Experienced in web automation and testing using Selenium WebDriver.', category: 'tools' },
    { name: 'Data Clustering', icon: <BsClipboardData />, proficiency: 55, description: 'Skilled in applying clustering algorithms for data analysis and pattern recognition.', category: 'data' },
  ]);

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'frontend', 'backend', 'database', 'tools', 'data'];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <Element name="skills">
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" textAlign="center" mb={4} color="white">
          Skills & Expertise
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          {categories.map((category) => (
            <Tooltip key={category} title={category.charAt(0).toUpperCase() + category.slice(1)} arrow>
              <Paper
                elevation={3}
                sx={{
                  px: 2,
                  py: 1,
                  mx: 1,
                  cursor: 'pointer',
                  bgcolor: activeCategory === category ? 'primary.main' : 'background.paper',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
                onClick={() => setActiveCategory(category)}
              >
                <Typography variant="body2" sx={{ textTransform: 'uppercase' }}>
                  {category.charAt(0).toUpperCase()}
                </Typography>
              </Paper>
            </Tooltip>
          ))}
        </Box>
        <Grid container spacing={3}>
          {filteredSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SkillCard skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Element>
  );
};

export default SkillsSection;