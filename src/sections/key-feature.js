import { Box, Container } from 'theme-ui';
import SectionHeader from '../components/section-header';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay } from 'swiper';
import { useState, useRef } from 'react';

// Importer les icônes ou images de vos services
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';


const data = [
  {
    id: 1,
    imgSrc: Performance,   
    altText: 'Design',
    title: 'Design',
    text: 'Créez des visuels attrayants et professionnels pour votre marque.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Création de contenu',
    title: 'Création de contenu',
    text: 'Développez du contenu unique et engageant pour vos projets.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Infographie',
    title: 'Infographie',
    text: 'Transformez vos données en infographies claires et informatives.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Community Management',
    title: 'Community Management',
    text: 'Gérez votre communauté en ligne et créez des interactions.',
  },
  {
    id: 5,
    imgSrc: Support,
    altText: 'Production audiovisuelle',
    title: 'Production audiovisuelle',
    text: 'Produisez des vidéos professionnelles pour votre communication.',
  },
];

export default function KeyFeature() {
  const [isHovered, setIsHovered] = useState(false);  // État pour contrôler l'interaction de la souris
  const swiperRef = useRef(null);  // Référence Swiper pour contrôler l'autoplay

  // Fonction pour gérer l'arrêt de l'autoplay lors du survol
  const handleMouseEnter = () => {
    setIsHovered(true);  // Indiquer que la souris est sur le cadre
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();  // Arrêter l'autoplay
    }
  };

  // Fonction pour reprendre l'autoplay lorsque la souris quitte le cadre
  const handleMouseLeave = () => {
    setIsHovered(false);  // Indiquer que la souris n'est plus sur le cadre
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();  // Redémarrer l'autoplay
    }
  };

  return (
    <Box sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Nos Services"
          title="Découvrez nos services exceptionnels adaptés à vos besoins"
        />

        <Swiper
          ref={swiperRef}  // Assigner la référence Swiper
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,  // Ne pas désactiver sur interaction
          }}
          modules={[Autoplay]}
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              onMouseEnter={handleMouseEnter}  // Ajouter l'événement onMouseEnter sur chaque Slide
              onMouseLeave={handleMouseLeave}  // Ajouter l'événement onMouseLeave sur chaque Slide
            >
              <Box sx={styles.cardContainer}>
                <Box sx={styles.iconBox}>
                  <img src={item.imgSrc} alt={item.altText} style={styles.icon} />
                </Box>
                <Box sx={styles.contentBox}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}

const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '30px',
    backgroundColor: 'rgb(240, 214, 157)', // Couleur de fond par défaut (teinte subtile)
    borderRadius: '12px', // Bords arrondis
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Ombre douce
    height: '350px', // Fixer une hauteur pour uniformiser
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease', // Transition pour la couleur de fond
    cursor: 'pointer',  // Changer le curseur en main lorsqu'on survole le cadre
    '&:hover': {
      transform: 'translateY(-10px)', // Légère élévation au survol
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)', // Ombre plus marquée au survol
      backgroundColor: 'rgb(214, 164, 94)', // Couleur de fond spécifique au survol (plus froide)
    },
  },
  iconBox: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Fond légèrement grisé pour les icônes
    borderRadius: '50%', // Icône ronde
    padding: '10px',
    width: '80px', // Taille de l'icône
    height: '80px',
  },
  icon: {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
  },
  contentBox: {
    flex: 1, // Prendre l'espace restant pour que tout soit aligné
    h3: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333', // Couleur du titre
    },
    p: {
      fontSize: '16px',
      color: '#555', // Couleur du texte
      lineHeight: '1.5',
    },
  },
};


