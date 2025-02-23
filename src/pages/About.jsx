import React from 'react';
import { Typography, Box ,Button} from '@mui/material';

function About() {
  return (
    <Box>
       <Button variant="contained" color='success'>Text</Button>
      <Typography variant="h4" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1">
        This is the About Page!
      </Typography>
    </Box>
  );
}

export default About;