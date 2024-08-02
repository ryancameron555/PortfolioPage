/** @format */

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
import ProjectA from '../Cards/projectA';
import ProjectB from '../Cards/projectB';
import ProjectC from '../Cards/projectC';
import ProjectD from '../Cards/projectD';
import theme from '../../Styling/theme';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  // opacity: '0.9',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '2vw',
  width: '100%',
}));

export default function CardContainer() {
  // const theme = useTheme();
  return (
    <Box
      sx={{
        width: '85%',
        margin: '10vh auto',
        padding: '0px',
        // backgroundColor: theme.palette.background.default,
        // opacity: '0.9',
        // boxShadow: `0 0 20px ${theme.palette.primary.main}`,
        borderRadius: '2vw',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        id="projects"
        sx={{
          textAlign: 'center',
          textDecoration: 'underline',
          textDecorationColor: theme.palette.primary.main,
          textShadow: `0 0 20px ${theme.palette.secondary.main}`,
        }}
      >
        My Projects
      </Typography>
      <br />
      <Typography variant="body1">
        These are some projects I have available to view on my Github page , I
        plan to add many more projects which will increase in size and
        complexity.
      </Typography>
      <br />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <ProjectA />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <ProjectB />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <ProjectC />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <ProjectD />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
