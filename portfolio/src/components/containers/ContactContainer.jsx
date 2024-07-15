/** @format */
// Container which is centred on page with opacity. All text will be centred.
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
import ContactForm from '../Forms/ContactForm';

const ContainerA = ({ children }) => {
  // const theme = useTheme();
  return (
    <Box
      sx={{
        width: '85%',
        margin: '20vh auto 10vh', // Adjusted margin for vertical spacing
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
        opacity: '0.9',
      }}
    >
      <ContactForm />
      {children}
    </Box>
  );
};

ContainerA.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerA;
