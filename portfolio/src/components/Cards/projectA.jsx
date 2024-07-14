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
        MaxWidth: '50%',
        background: theme.palette.background.default,
        margin: '3vh',
        boxShadow: `0px 0px 25px ${theme.palette.primary.main}`,
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
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      {children}
    </Card>
  );
};

ProjectA.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectA;
