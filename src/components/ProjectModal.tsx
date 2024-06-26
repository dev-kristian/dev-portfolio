import React from 'react';
import { Modal, Box, Typography, Button, IconButton, GlobalStyles } from '@mui/material';
import { Close, GitHub, Launch } from '@mui/icons-material';

interface Project {
  name: string;
  description: string;
  image: string;
  details: JSX.Element;
  liveDemo: string;
  github: string;
}

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, project }) => {
  return (
    <>
      <GlobalStyles styles={{ ':focus-visible': { outline: 'none' } }} />
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '80%', md: '60%' },
          maxWidth: 800,
          bgcolor: 'background.paper',
          border: 'none',
          borderRadius: 6,
          boxShadow: 24,
          p: 2,
          maxHeight: '90vh',
          overflowY: 'auto',
        }}>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
          <Typography id="project-modal-title" variant="h6" component="h2">
            {project.name}
          </Typography>
          <Box
            component="img"
            sx={{
              height: 400,
              width: '100%',
              maxHeight: { xs: 200, md: 300, xl: 400 },
              objectFit: 'fill',
              mt: 2,
              mb: 2,
              borderRadius: 2,
            }}
            alt={project.name}
            src={project.image}
          />
          <Typography id="project-modal-description" sx={{ mt: 2 }}>
            {project.details}
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', gap:2, justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              startIcon={<GitHub />}
              onClick={() => window.open(project.github, '_blank')}
            >
              View on GitHub
            </Button>
            <Button
              variant="contained"
              startIcon={<Launch />}
              onClick={() => window.open(project.liveDemo, '_blank')}
            >
              Live Demo
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ProjectModal;
