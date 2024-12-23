import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite, sx }) {
  return (
    <Box sx={{ variant: 'sectionHeader', ...sx }}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
          ...sx?.subTitle, // Appliquer les styles personnalisés pour le slogan
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading',
          ...sx?.title, // Appliquer les styles personnalisés pour le titre
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
