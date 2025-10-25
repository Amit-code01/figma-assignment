import React, { useRef, useState } from 'react';
import {
  Box,
  Card,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function GalleryCard() {
  const [images, setImages] = useState([
    'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=600', // Mountain
    'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600', // Laptop workspace
    'https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg?auto=compress&cs=tinysrgb&w=600', // City skyline
    'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600', // Forest
    'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=600', // Beach
  ]);

  const scrollRef = useRef(null);

  const handleScroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -250 : 250,
        behavior: 'smooth',
      });
    }
  };

  const handleAddImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages((prev) => [...prev, url]);
    }
  };

  return (
    <Card
      sx={(theme) => ({
        p: 4,
        borderRadius: '20px',
        mt: 6,
        bgcolor: 'background.paper',
        boxShadow: theme.customShadows.neumoOut,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow:
            '10px 10px 28px rgba(0,0,0,0.8), -10px -10px 28px rgba(255,255,255,0.06)',
        },
      })}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ letterSpacing: '0.5px' }}
        >
          Gallery
        </Typography>

        <Button
          component="label"
          startIcon={<AddIcon />}
          sx={{
            textTransform: 'none',
            borderRadius: '999px',
            px: 3,
            py: 1,
            fontWeight: 500,
            fontSize: '0.9rem',
            bgcolor: 'rgba(255,255,255,0.08)',
            color: 'text.primary',
            boxShadow:
              '0 4px 12px rgba(0,0,0,0.4), inset 1px 1px 0 rgba(255,255,255,0.1)',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.12)',
              boxShadow:
                '0 6px 16px rgba(0,0,0,0.6), inset 1px 1px 0 rgba(255,255,255,0.12)',
            },
          }}
        >
          Add Image
          <input type="file" hidden accept="image/*" onChange={handleAddImage} />
        </Button>
      </Box>

      {/* Image Scroll Area */}
      <Box sx={{ position: 'relative', pb: 1 }}>
        {/* Left Arrow */}
        <IconButton
          onClick={() => handleScroll('left')}
          sx={{
            position: 'absolute',
            left: -20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            bgcolor: 'rgba(0,0,0,0.4)',
            color: '#fff',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        {/* Scrollable Image Container */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            gap: 3,
            pl: 1,
            pr: 1,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {images.map((src, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt={`Gallery ${i}`}
              sx={{
                width: 200,
                height: 130,
                borderRadius: 3,
                flexShrink: 0,
                objectFit: 'cover',
                transition: '0.3s ease',
                boxShadow:
                  '6px 6px 16px rgba(0,0,0,0.8), -4px -4px 12px rgba(255,255,255,0.05)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow:
                    '10px 10px 24px rgba(0,0,0,0.9), -6px -6px 18px rgba(255,255,255,0.08)',
                },
              }}
            />
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={() => handleScroll('right')}
          sx={{
            position: 'absolute',
            right: -20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            bgcolor: 'rgba(0,0,0,0.4)',
            color: '#fff',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
}
