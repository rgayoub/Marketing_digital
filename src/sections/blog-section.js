import { Container, Box, Button } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from 'assets/blog/1.jpg';
import PostThumb2 from 'assets/blog/2.jpg';
import PostThumb3 from 'assets/blog/3.jpg';
import { useRouter } from "next/navigation";
import designe from 'assets/Service/designe.jpeg';
import creation_de_contenu from 'assets/Service/creation_de_contenu.jpeg';

const data = [
  {
    id: 1,
    imgSrc: designe,
    altText: 'Marketing',
    title: 'Design',
    postLink: '/design', // Lien propre pour chaque carte
  },
  {
    id: 2,
    imgSrc: creation_de_contenu,
    altText: 'Creative',
    title: 'Création de contenu',
    postLink: '/creationcontenu', // Lien propre pour chaque carte
  },
  {
    id: 3,
    imgSrc: PostThumb1,
    altText: 'Creative',
    title: 'Community Manager',
    postLink: '/management', // Lien propre pour chaque carte
  },
  {
    id: 4,
    imgSrc: PostThumb1,
    altText: 'Creative2',
    title: 'Production audiovisuelle',
    postLink: '/audiovisuelle', // Lien propre pour chaque carte
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3,
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
  cardWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
  },
  cardButton: {
    backgroundColor: '#b7934c',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '-60px',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-2px)',
    },
  },
  title: {
    fontSize: '18px',
    color: '#333',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'black',
    },
  },
  slogan: {
    fontSize: [1, null, 2],
    color: '#6F4F37',  // Couleur marron pour le sous-titre
    textTransform: 'uppercase',
    fontWeight: '700',
    mb: [2, 3],
    letterSpacing: ['2px', null, '3px'],
  },
};

export default function BlogSection() {
  const router = useRouter();

  const handleContactClick = (link) => {
    router.push(link); // Redirige vers la route correcte
  };

  return (
    <Box sx={{ variant: 'section.news' }} id="realisation">
      <Container>
        <Box sx={{ marginTop: '70px' }}>
          <SectionHeader
            slogan="Nos Réalisations"
            title="Nos projets sur mesure"
            sx={{
              textAlign: 'center',
              marginBottom: '60px',
              // Application du style au slogan
              subTitle: styles.slogan, 
              title: {
                color: '#1d1d1d',
                fontSize: ['28px', '34px', '40px'],
                fontWeight: '800',
                letterSpacing: '-0.5px',
                lineHeight: 1.4,
              },
            }}
          />
        </Box>

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            responsive={responsive}
            showDots={false}
            slidesToSlide={1}
          >
            {data.map((item) => (
              <Box key={item.id} sx={styles.cardWrapper}>
                <PostCard
                  src={item.imgSrc}
                  alt={item.altText}
                  postLink={item.postLink}
                  title={
                    <Box sx={styles.title}>
                      {item.title}
                    </Box>
                  }
                />
                <Button
                  sx={styles.cardButton}
                  onClick={() => handleContactClick(item.postLink)}
                >
                  En savoir plus
                </Button>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
