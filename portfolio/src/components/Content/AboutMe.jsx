/**
 * eslint-disable react/no-unescaped-entities
 *
 * @format
 */

/** @format */

import Typography from '@mui/material/Typography';
import ContainerA from '../containers/AboutContainer';

function AboutMe() {
  return (
    <ContainerA>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        <h4>Welcome! I'm Ryan Cameron ,</h4> an aspiring software developer
        based in Waikato, NZ. I have a deep passion for software development and
        exploring new technologies. I aim to put my IOD/AUT Software Engineering
        qualification to use and create some exciting projects
      </Typography>
    </ContainerA>
  );
}

export default AboutMe;
