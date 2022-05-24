import { Box, Typography } from '@mui/material';
import React from 'react';
import ChuckJokes from '../../components/container/ChuckJokes';

const ChuckJokesPage = () => {
  return (
    <Box>
      <Typography variant='h3' component='h1' sx={{textAlign: 'center'}}>
        Chuck Norris Random Jokes
      </Typography>
      <ChuckJokes />
    </Box>
  );
}

export default ChuckJokesPage;
