import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  useTheme,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Send as SendIcon } from '@mui/icons-material';

const ModernContactSection: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setOpen(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
        </Typography>
        <Paper elevation={3} sx={{ mt: 4, p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={isLoading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
                  disabled={isLoading}
                  sx={{
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                  }}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Message sent successfully!"
      />
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        message={error}
      />
    </Box>
  );
};

export default ModernContactSection;