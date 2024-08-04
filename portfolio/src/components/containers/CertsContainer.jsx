/** @format */
import {
  Box,
  Stack,
  Button,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import cvFile from '../../assets/Docs/cv.pdf';
import certFile from '../../assets/Docs/certs.pdf';
import theme from '../../Styling/theme';

const CertsContainer = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleExpand = (file) => {
    setSelectedFile(file);
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
    setSelectedFile(null);
  };

  return (
    <Box
      sx={{
        width: '85%',
        margin: '10vh auto',
        padding: '0px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '20vh',
        borderRadius: '2vw',
      }}
    >
      {expanded ? (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.background.paper,
            zIndex: 1300,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '10vh',
              right: '5vw',
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
              },
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          <iframe
            src={selectedFile}
            style={{
              width: '100%',
              height: isSmallScreen ? '80%' : '100%',
              border: 'none',
            }}
            title="Document Viewer"
          />
        </Box>
      ) : (
        <>
          <Typography
            variant="h2"
            sx={{
              textDecoration: 'underline',
              textDecorationColor: theme.palette.primary.main,
              textShadow: `0 0 20px ${theme.palette.secondary.main}`,
            }}
          >
            Experience and Qualifications
          </Typography>
          <br />
          <Typography variant="body1">
            You can view/download a copy of my CV and Certifications here, I am
            happy to discuss further.
          </Typography>
          <br />
          <Stack spacing={5} direction={{ xs: 'column', sm: 'row' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => handleExpand(cvFile)}
            >
              CV
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => handleExpand(certFile)}
            >
              Certificates
            </Button>
          </Stack>
          {children}
        </>
      )}
    </Box>
  );
};

CertsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CertsContainer;
