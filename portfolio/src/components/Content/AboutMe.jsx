/**
 * eslint-disable react/no-unescaped-entities
 *
 * @format
 */

/** @format */

import Typography from '@mui/material/Typography';
import ContainerA from '../containers/AboutContainer';
import theme from '../../Styling/theme';

function AboutMe() {
  return (
    <ContainerA id="about">
      <Typography
        variant="h2"
        gutterBottom
        id="about"
        sx={{
          textDecoration: 'underline',
          textDecorationColor: theme.palette.primary.main,
          textShadow: `0 0 20px ${theme.palette.secondary.main}`,
        }}
      >
        About Me
      </Typography>
      <Typography variant="body1">
        <h4>Welcome! I&apos;m Ryan Cameron ,</h4> an aspiring software developer
        based in Waikato, NZ. I have a deep passion for software development and
        exploring new technologies. I aim to put my IOD/AUT Software Engineering
        qualification to use and create some exciting projects
      </Typography>
    </ContainerA>
  );
}

export default AboutMe;
