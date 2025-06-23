/** @format */

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import MemoryGame from '../../assets/projectImages/MemoryGame.jpeg';
import { useState } from 'react';
import DialogContainer from '../containers/DialogContainer';

const ProjectA = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{
        MaxWidth: '100%',
        background: theme.palette.background.default,
        margin: '1vh',
        // boxShadow: `0px 0px 5px ${theme.palette.secondary.main}`,
      }}
    >
      <CardMedia
        sx={{
          height: '25vh',
        }}
        image={MemoryGame}
        title="Memory Game Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Memory Game
        </Typography>
        <Typography variant="body2" color="text.primary">
          A fun memory game using standard cards , more functionality and
          features are in progress.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() =>
            window.open(
              'https://ryancameron555.github.io/MemoryGame/',
              '_blank'
            )
          }
        >
          Try Me!
        </Button>
        <Button size="small" onClick={handleClickOpen}>
          About
        </Button>
      </CardActions>
      {children}
      <Dialog open={open} onClose={handleClose}>
        <DialogContainer>
          <DialogTitle>About</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This project is a simple memory game using standard cards , I
              intend to develop this further to add difficulty levels , a
              leaderboard and functionality to challenge friends and family. I
              have created this with React and used States/Effects to get things
              working.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </DialogContainer>
      </Dialog>
    </Card>
  );
};

ProjectA.propTypes = {
  children: PropTypes.node,
};

export default ProjectA;
