/** @format */
// Container which is centred on page with opacity. All text will be centred.
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const ContainerA = ({ children }) => {
  return (
    <Box
      sx={{
        width: '75%',
        margin: '0 auto',
        padding: '10px',
        backgroundColor: 'background.primary',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Center the container
      }}
    >
      {children}
    </Box>
  );
};

ContainerA.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerA;
