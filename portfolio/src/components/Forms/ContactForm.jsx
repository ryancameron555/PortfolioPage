/** @format */
import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  Typography,
} from '@mui/material';
import emailjs from 'emailjs-com';
import { useTheme } from '@mui/material/styles';

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        'service_ugly4x7',
        'template_crptia3',
        formData,
        'a-K90QQLRagJFDgMo'
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSnackbarOpen(true);
        setFormData({
          name: '',
          surname: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          backgroundColor: theme.palette.background.default,
          opacity: '0.9',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '1vh',
        }}
      >
        <Typography variant="h2">Contact Me</Typography>
        <br />
        <Typography variant="body1">
          Feel free to connect with me for opportunities, questions, or
          constructive feedback. I'm always eager to engage and collaborate.
        </Typography>
        <br />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              width: '100%',
              '& .MuiInputLabel-root': { color: theme.palette.text.primary },
            }}
          />
          <TextField
            label="Surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            sx={{
              width: '100%',
              '& .MuiInputLabel-root': { color: theme.palette.text.primary },
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            width: '100%',
            justifyContent: 'center',
            marginTop: 2,
            '& .MuiInputLabel-root': { color: theme.palette.text.primary },
          }}
        >
          <TextField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              width: '100%',
              '& .MuiInputLabel-root': { color: theme.palette.text.primary },
            }}
          />
          <TextField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            sx={{
              width: '100%',
              '& .MuiInputLabel-root': { color: theme.palette.text.primary },
            }}
          />
        </Box>
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          InputProps={{
            sx: {
              resize: 'vertical',
            },
          }}
          sx={{
            width: '100%',
            marginTop: 2,
            '& .MuiInputLabel-root': { color: theme.palette.text.primary },
          }}
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          type="submit"
          sx={{
            backgroundColor: theme.palette.primary.main,
            marginTop: 2,
            margin: '5vw',
          }}
        >
          Submit
        </Button>
        <Box
          sx={{
            margin: '5vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2vw', // Space between the logos
          }}
        >
          <a
            href="https://www.linkedin.com/in/ryan-cameron-003686158/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src\assets\projectImages\icons8-linkedin.svg"
              alt="LinkedIn"
              style={{ width: '10vh', height: '10vh' }}
            />
          </a>
          <a
            href="https://github.com/ryancameron555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src\assets\projectImages\github-logo-svgrepo-com.svg"
              alt="GitHub"
              style={{
                width: '8vh',
                height: '8vh',
                backgroundColor: 'white',
                borderRadius: '1vw',
              }}
            />
          </a>
        </Box>
      </Box>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Email sent successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
