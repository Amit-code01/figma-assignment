import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import AboutCard from './components/AboutCard';
import GalleryCard from './components/GalleryCard';

export default function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid
          container
          spacing={6}
          alignItems="flex-start"
          justifyContent="center"
        >
          {/* Left half: Empty on laptops, collapses away on mobile */}
          <Grid
            item
            xs={0}      // Hidden on small screens
            md={6}      // Takes half width on laptop
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          ></Grid>

          {/* Right half: content area */}
         <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 5, px: { xs: 2, md: 0 }, }} >
            <AboutCard />
            <GalleryCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
