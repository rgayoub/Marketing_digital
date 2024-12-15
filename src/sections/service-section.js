import React from 'react';
import { Container, Box, Grid, Text, Heading } from 'theme-ui';
import Image from 'next/image';
import TextFeature from 'components/text-feature';

// import AboutImage from '../assets/about-image.png'; // Remplacez par l'image appropriée
// import shapePattern from '../assets/shape-pattern1.png'; // Remplacez par l'image de forme si nécessaire

const data = {
  subTitle: 'Qui sommes-nous',
  title: 'Découvrez notre équipe et notre mission',
  description:
    "Nous sommes une équipe passionnée par ce que nous faisons. Notre mission est de fournir des services de qualité en utilisant les dernières technologies et en apportant une valeur ajoutée à nos clients.",
};

export default function AboutSection() {
  return (
    <Box sx={{ variant: 'section.about' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src='' alt="About Us" />
          <Box sx={styles.shapeBox}>
            <Image src='' alt="Shape" />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />
          <Text sx={styles.description}>{data.description}</Text>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    width: '100%',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: '100%',
      width: '100%',
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  description: {
    fontSize: [1, null, null, '14px', 1],
    fontWeight: 400,
    lineHeight: 1.9,
    marginTop: '20px',
  },
};
