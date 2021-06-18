import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <Box>
      <Container maxWidth="sm">
        <h1>hello world!</h1>
        <img alt="Doctored Up" src="./logo_whitebg.png" width="100%" />
        <h1>coming soon...</h1>
      </Container>
    </Box>
  );
};

export default Home;
