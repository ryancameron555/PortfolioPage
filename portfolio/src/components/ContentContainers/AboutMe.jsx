/** @format */

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function AboutMe() {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        Hello! I'm Ryan Cameron, a passionate developer based in [Your
        Location]. I love building web applications using React and exploring
        new technologies. My journey into programming started [brief personal
        background]. Currently, I am focusing on [current focus or interests].
        In my free time, I enjoy [hobbies or interests outside of programming].
      </Typography>
    </Box>
  );
}

export default AboutMe;
