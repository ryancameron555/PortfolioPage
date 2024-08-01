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
import { useState } from 'react';
import DialogContainer from '../containers/DialogContainer';
import csharp from '../../assets/projectImages/csharp.svg';

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
        image={csharp}
        title="C sharp logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          C# Basics
        </Typography>
        <Typography variant="body2" color="text.primary">
          General exercises that cover the basics of C#
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          href="https://github.com/ryancameron555/C_Sharp_Practice"
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
              This covers a variety of basics in C# including : Variables/Data
              types ; Math operators; Comparison operators ;Logical operators ;
              Conditional statements; Loops; Arrays; Collections; Methods;
              Classes and Exception handling
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
