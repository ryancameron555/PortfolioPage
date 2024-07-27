/** @format */

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
import ProjectA from '../Cards/projectA';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  opacity: '0.9',
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
        opacity: '0.9',
        // boxShadow: `0 0 20px ${theme.palette.primary.main}`,
        borderRadius: '2vw',
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        id="projects"
        sx={{
          textAlign: 'center',
        }}
      >
        My Projects
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <ProjectA />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <ProjectA />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <ProjectA />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <ProjectA />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
