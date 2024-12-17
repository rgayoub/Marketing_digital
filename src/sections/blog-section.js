import { Container, Box, Button } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from 'assets/blog/1.jpg';
import PostThumb2 from 'assets/blog/2.jpg';
import PostThumb3 from 'assets/blog/3.jpg';
import { useRouter } from "next/navigation";


const data = [
  {
    id: 1,
    imgSrc: PostThumb3,
    altText: 'Marketing',
    title: 'Design',
    postLink: '/design', // Lien propre pour chaque carte
  },
  {
    id: 2,
    imgSrc: PostThumb1,
    altText: 'Creative',
    title: 'Création de contenu',
    postLink: '/creationcontenu', // Lien propre pour chaque carte

  },
  {
    id: 3,
    imgSrc: PostThumb1,
    altText: 'Creative',
    title: 'Community Management',
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
    backgroundColor: 'rgba(153, 102, 0, 0.57)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '-60px',
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
        <SectionHeader
          slogan="our blog"
          title="Explore our products for your business solution"
        />
        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <Box key={item.id} sx={styles.cardWrapper}>
                <PostCard
                  src={item.imgSrc}
                  alt={item.altText}
                  postLink={item.postLink}
                  title={item.title}
                />
               <Button 
                  sx={styles.cardButton} 
                  onClick={() => handleContactClick(item.postLink)} // Passer le lien spécifique ici
                >
                  Learn More
                </Button>              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
