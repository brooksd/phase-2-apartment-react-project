import React from 'react';
import {Container, Typography, Box } from '@mui/material'

const Home = () => {
  return (
    <Container>
        <Box my={5}>
            <Typography variant="h3" components="h2" align="center">Apartment Managment System</Typography>
            <Typography component="h2" align="center">React Phase 2 Project</Typography>
        </Box>
    </Container>
  )
}

export default Home