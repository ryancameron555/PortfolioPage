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
import Hajamie from '../../assets/projectImages/Hajamie.png';
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
        image={Hajamie}
        title="Hajamie Judo Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hajamie Judo
        </Typography>
        <Typography variant="body2" color="text.primary">
          Fullstack Judo Club website with general club information. SQL
          database and API usage to create exercises based on user input.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          href="https://github.com/ryancameron555/FullstackJudoWebsite"
          target="blank"
          rel="noopener noreferrer"
        >
          Code
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
              Hajamie Judo is a fullstack Judo Club website that provides
              general information about the club. It features an SQL database
              and API usage to create exercises based on user input. This
              project showcases various fullstack development skills and
              techniques.
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
  children: PropTypes.node.isRequired,
};

export default ProjectA;
