import React, { useState } from 'react';
import {
  Box,
  Card,
  Tabs,
  Tab,
  Typography,
  IconButton,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function AboutCard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  const content = [
    `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. 

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a little about me!`,

    `I’ve worked at Salesforce for 3 years now as a Senior Sales Rep. Before that, I spent 4 years in business development at Oracle. 

My work mainly revolves around helping enterprise clients integrate Salesforce products to improve sales operations and customer success.`,

    `Recommended learning paths:
- Salesforce Trailhead
- LinkedIn Learning
- HubSpot Academy

These resources have helped me and many of my clients grow professionally.`,
  ];

  return (
    <Card
      sx={(theme) => ({
        position: 'relative',
        p: 4,
        borderRadius: '20px',
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
      {/* Help icon (top-left) */}
      <IconButton
        size="small"
        sx={{
          position: 'absolute',
          left: 16,
          top: 16,
          opacity: 0.5,
          '&:hover': { opacity: 1 },
        }}
      >
        <HelpOutlineIcon fontSize="small" />
      </IconButton>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={(e, val) => setActiveTab(val)}
        sx={{
          mb: 3,
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 600,
            color: 'text.secondary',
            minWidth: 110,
            px: 3,
            borderRadius: '999px',
            transition: 'all 0.3s ease',
          },
          '& .Mui-selected': {
            bgcolor: 'rgba(255,255,255,0.08)',
            color: 'text.primary',
            boxShadow:
              'inset 1px 1px 2px rgba(255,255,255,0.1), 0 3px 8px rgba(0,0,0,0.4)',
          },
          '& .MuiTabs-indicator': { display: 'none' },
        }}
      >
        {tabs.map((t) => (
          <Tab key={t} label={t} />
        ))}
      </Tabs>

      {/* Content */}
      <Box
        sx={(theme) => ({
          mt: 2,
          maxHeight: 220,
          overflowY: 'auto',
          p: 3,
          borderRadius: 3,
          lineHeight: 1.7,
          fontSize: '0.95rem',
          color: 'text.primary',
          bgcolor: '#171719',
          boxShadow: theme.customShadows.neumoIn,
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow:
              'inset 8px 8px 18px rgba(0,0,0,0.7), inset -5px -5px 12px rgba(255,255,255,0.06)',
          },
          '&::-webkit-scrollbar': { width: 6 },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 6,
          },
        })}
      >
        <Typography whiteSpace="pre-line">{content[activeTab]}</Typography>
      </Box>
    </Card>
  );
}
