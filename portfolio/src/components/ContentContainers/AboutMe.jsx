/** @format */

import * as React from 'react';
import Typography from '@mui/material/Typography';
import ContainerA from '../containers/ContainerA';

function AboutMe() {
  return (
    <ContainerA>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        Hello! I'm Ryan Cameron, a passionate developer based in Waikato, NZ. I
        have a deep passion for software development and exploring new
        technologies. My journey into software development started after I saw a
        friend writing code in a text editor which I could not understand at
        all. Trying to understand it all frightened me at first , and that's
        when I realised I need to learn how to do this. Currently, I am focusing
        on [current focus or interests]. In my free time, I enjoy [hobbies or
        interests outside of programming].
      </Typography>
    </ContainerA>
  );
}

export default AboutMe;
