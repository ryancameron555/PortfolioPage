/** @format */

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import logo from '../../assets/rwcLogo.svg';

const ProjectA = ({ children }) => {
  const theme = useTheme();
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
        image={logo}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.primary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Code
        </Button>
        <Button size="small">About</Button>
      </CardActions>
      {children}
    </Card>
  );
};

ProjectA.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectA;
