import { Box, Container, Button, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getRandomJoke } from '../../services/axiosService';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { boxContentStyle, chuckBoxStyle } from '../assets/styles/chuckStyles';
import ChuckImage from '../assets/images/chuck.jpg';
import { AddBox } from '@mui/icons-material';

const ChuckJokes = () => {

  const [voted, setVoted] = useState(false);
  const [currentJoke, setCurrentJoke] = useState('');
  const [jokesLiked, setJokesLiked] = useState(0);
  const [jokesDisliked, setJokesDisliked] = useState(0);

  useEffect(() => {
    generateJoke();
  }, []);

  function generateJoke() {
    getRandomJoke()
      .then(response => setCurrentJoke(response.value))
      .catch(error => console.error(`Something went wrong: ${error}`))
      .finally(() => setVoted(false));
  };

  function handleLiked() {
    if (voted) {
      alert('You already vote for this joke!');
    } else {
      setJokesLiked(jokesLiked + 1);
      setVoted(true);
    }
  }

  function handleDisliked() {
    if (voted) {
      alert('You already vote for this joke!');
    } else {
      setJokesDisliked(jokesDisliked + 1);
      setVoted(true);
    }
  }

  return (
    <Box sx={chuckBoxStyle}>
      <Grid container>
        <Grid
          item
          sm={4}
          container
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          <img src={ChuckImage} alt='Chuck Norris' style={{ width: '100%' }} />
        </Grid>
        <Grid item sm={8} sx={{ width: '100%' }}>
          <Stack sx={boxContentStyle}>
            <Button variant='contained' onClick={generateJoke} sx={{ mb: '0.5rem' }}>
              Generate Random Joke
            </Button>

            <Typography component='p' sx={{ mt: '1rem' }}>
              {currentJoke}
            </Typography>

            <ListItem>
              <ListItemButton onClick={handleLiked}>
                <ListItemIcon>
                  <ThumbUpIcon />
                </ListItemIcon>
                <ListItemText>Like</ListItemText>
              </ListItemButton>

              <ListItemButton onClick={handleDisliked}>
                <ListItemIcon>
                  <ThumbDownIcon />
                </ListItemIcon>
                <ListItemText>Dislike</ListItemText>
              </ListItemButton>
            </ListItem>

            <Typography variant='h6' component='h2' sx={{ my: '0.5rem' }}>
              Total
            </Typography>
            <Grid container >
              <Grid item sm={6} >
                Liked: {jokesLiked}
              </Grid>
              <Grid item sm={6} >
                Disliked: {jokesDisliked}
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ChuckJokes;
