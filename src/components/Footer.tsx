import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box sx={{ p: 3, textAlign: 'center', background: 'black', color:'white' }}>
    <Typography variant="body2">
      © {new Date().getFullYear()} Filan Fisteku
    </Typography>
  </Box>
);

export default Footer;
