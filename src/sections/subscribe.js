import { Box, Button, Heading, Text } from 'theme-ui';

export default function Subscribe() {
  return (
    <Box sx={styles.contentBox}>
      <Box sx={styles.contentBoxInner}>
        <Heading as="h2" sx={styles.title}>
          Subscribe to our Blog
        </Heading>
        <Text as="p" sx={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.
        </Text>
        
        {/* Bouton "Subscribe" qui redirige vers Instagram */}
        <Button
          sx={styles.subscribeBtn}
          onClick={() => window.open('https://www.instagram.com/herdeesigner?igsh=bHdxaDV6dmgzamty', '_blank')}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}

const styles = {
  contentBox: {
    backgroundColor: 'rgba(153, 102, 0, 0.57)',
    textAlign: 'center',
    borderRadius: 10,
    py: ['60px', null, 8],
  },
  contentBoxInner: {
    width: ['100%', null, '540px', '600px'],
    mx: 'auto',
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['-.5px', null, '-1.5px'],
    mb: [2, 3],
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    color: 'white',
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  subscribeBtn: {
    backgroundColor: '#E1306C',  // Instagram Color
    color: 'white',
    py: ['15px'],
    mt: [2],
    fontSize: ['16px'],
    borderRadius: '50px',
    '&:hover': {
      backgroundColor: '#C13584',  // Hover color (Instagram purple)
    },
  },
};
