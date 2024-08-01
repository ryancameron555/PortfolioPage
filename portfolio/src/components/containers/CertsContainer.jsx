/** @format */
import { Box, Stack, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
import cvFile from '../../assets/Docs/cv.pdf';
import certFile from '../../assets/Docs/certs.pdf';
import theme from '../../Styling/theme';

const CertsContainer = ({ children }) => {
  // const theme = useTheme();
  return (
    <Box
      sx={{
        width: '85%',
        margin: '10vh auto', // Adjusted margin for vertical spacing
        padding: '0px',
        // backgroundColor: theme.palette.background.default,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '20vh',
        // boxShadow: `0 0 20px ${theme.palette.primary.main}`,
        borderRadius: '2vw',
        // opacity: '0.9',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textDecoration: 'underline',
          textDecorationColor: theme.palette.primary.main,
          textShadow: `0 0 20px ${theme.palette.secondary.main}`,
        }}
      >
        Documents
      </Typography>
      <br />
      <Typography variant="body1">
        Feel free to download a copy of my CV and Certifications, if you have
        any questions please feel free to contact me.
      </Typography>
      <br />
      <Stack spacing={5} direction={{ xs: 'column', sm: 'row' }}>
        <Button
          variant="contained"
          size="large"
          component="a"
          href={cvFile}
          download="cv.pdf"
        >
          CV
        </Button>
        <Button
          variant="contained"
          size="large"
          component="a"
          href={certFile}
          download="certs.pdf"
        >
          Certificates
        </Button>
      </Stack>
      {children}
    </Box>
  );
};

CertsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CertsContainer;
