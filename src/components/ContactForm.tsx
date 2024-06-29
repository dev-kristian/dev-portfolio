// ContactForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: '#B71C1C',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B71C1C',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#B71C1C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#B71C1C',
    },
  },
  '& input': {
    color: 'white',
  },
  '& textarea': {
    color: 'white',
  },
});

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom color="white">Contact Me</Typography>
      <StyledTextField
        fullWidth
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        required
      />
      <StyledTextField
        fullWidth
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
      />
      <StyledTextField
        fullWidth
        label="Message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        margin="normal"
        required
      />
      <Button 
        type="submit" 
        variant="contained" 
        sx={{ 
          mt: 2, 
          bgcolor: '#B71C1C', 
          '&:hover': { 
            bgcolor: '#8B0000' 
          } 
        }}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;