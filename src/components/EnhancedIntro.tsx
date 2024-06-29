import React from 'react';
import { Typography, Box, Container, Avatar, Grid, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedBox = styled(Box)({
  animation: `${fadeIn} 1s ease-out`,
});

const GradientText = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(2),
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(25),
  height: theme.spacing(25),
  marginBottom: theme.spacing(2),
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[10],
}));

const EnhancedIntro: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <AnimatedBox>
              <LargeAvatar alt="Kristian" src="/path/to/your/photo.jpg" />
            </AnimatedBox>
          </Grid>
          <Grid item xs={12} md={8}>
            <AnimatedBox>
              <GradientText variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
                Kristian
              </GradientText>
              <Typography
                variant="h4"
                color="text.secondary"
                paragraph
                sx={{ mb: 4 }}
              >
                Full-Stack Web Developer
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px' }}>
                Crafting responsive, functional, and beautiful web applications 
                that delight users. Leveraging industry best practices and 
                cutting-edge techniques to bring visions to life in the digital realm.
              </Typography>
            </AnimatedBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EnhancedIntro;