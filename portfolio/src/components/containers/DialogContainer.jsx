/** @format */
// Container which is centred on page with opacity. All text will be centred.
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

const DialogContainer = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: '10px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // boxShadow: `0 0 20px ${theme.palette.primary.main}`,
        // borderRadius: '2vw',
      }}
    >
      {children}
    </Box>
  );
};

DialogContainer.propTypes = {
  children: PropTypes.node,
};

export default DialogContainer;
