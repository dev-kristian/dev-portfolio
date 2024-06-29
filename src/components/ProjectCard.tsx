// ProjectCard.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

interface Project {
  name: string;
  description: string;
  image: string;
  details: string;
  liveDemo: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card 
      onClick={() => onClick(project)}
      sx={{ 
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'grey.900',
        color: 'white',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 10px 20px rgba(183, 28, 28, 0.2)',
        },
        cursor: 'pointer',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="grey.300" sx={{ mb: 2, flexGrow: 1 }}>
          {project.description}
        </Typography>
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between' }}>
          <Button 
            size="small" 
            startIcon={<GitHub />}
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, '_blank');
            }}
            sx={{ color: 'white' }}
          >
            GitHub
          </Button>
          <Button 
            size="small" 
            startIcon={<Launch />}
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.liveDemo, '_blank');
            }}
            sx={{ color: 'white' }}
          >
            Live Demo
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;