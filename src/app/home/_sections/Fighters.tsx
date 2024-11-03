import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import webp from "@/app/_assets/webp";
import svgs from "@/app/_assets/svgs";

const fighters = [
  {
    index: 0,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter2,
  },
  {
    index: 1,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter2,
  },
  {
    index: 2,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter3,
  },
  {
    index: 3,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter1,
  },
  {
    index: 4,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter2,
  },
  {
    index: 5,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter3,
  },
];

const fighterImages = [
  { index: 0, imagePath: webp.Fighter2, alt: "fighter2" },
  { index: 1, imagePath: webp.Fighter2, alt: "fighter2" },
  { index: 2, imagePath: webp.Fighter3, alt: "fighter3" },
];

export default function Fighters() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const sliderSettings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 600, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(bgFighters.webp)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: {
          xs: "40px 20px 40px",
          sm: "60px 50px 60px",
          md: "60px 50px 60px",
          lg: "80px 100px 80px",
        },
      }}
      className="project"
    >
      <Box
        sx={{
          maxWidth: "1600px",
          width: "100%",
        }}
      >
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{
            fontSize: {
              xs: "24px",
              sm: "30px",
              md: "40px",
              lg: "48px",
              xl: "64px",
            },
            fontWeight: "400",
            fontFamily: "Anton, sans-serif",
            color: "#F63333",
            textTransform: "uppercase",
            paddingBottom: {
              xs: "30px",
              sm: "40px",
              xl: "80px",
            },
          }}
        >
          our schedule
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "50px", md: "70px", xl: "100px" },
            flexDirection: { xs: "column-reverse", lg: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "row", lg: "column" },
              gap: "25px",
            }}
          >
            {fighterImages.map((img, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "50px", md: "77px", xl: "90px" },
                  height: { xs: "50px", md: "77px", xl: "90px" },
                  position: "relative",
                }}
              >
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: "0",
                  }}
                  src={img.imagePath}
                  alt={img.alt}
                />
              </Box>
            ))}
          </Box>

          {/* React Slick Slider */}
          <Box
            className="slider-container"
            sx={{ maxWidth: { xs: "300px", sm: "1000px" }, width: "100%" }}
          >
            <Slider {...sliderSettings}>
              {fighters.map((fighter, index) => (
                <FighterCard
                  key={index}
                  name={fighter.name}
                  description={fighter.description}
                  imageSrc={fighter.imageSrc}
                />
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

type FighterCardProps = {
  name: string;
  description: string;
  imageSrc: string | StaticImageData;
};

export function FighterCard({ name, description, imageSrc }: FighterCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: { lg: "scale(0.4)" },
        // filter: "grayscale(100%)",
      }}
      className="project"
    >
      <Box
        sx={{
          width: {
            xs: "200px",
            sm: "250px",
            md: "300px",
          },
          borderWidth: { xs: "1px", md: "1.7px" },
          borderStyle: "solid",
          borderColor: "#ffffff",
        }}
      >
        <Box
          sx={{
            maxWidth: "300px",
          }}
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={imageSrc}
            alt={name}
          />
        </Box>

        <Box
          sx={{
            padding: {
              xs: "10px",
              md: "13px",
            },
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            backgroundColor: "#0D0D0DB2",
            borderTopWidth: { xs: "1px", md: "1.7px" },
            borderTopStyle: "solid",
            borderTopColor: "#ffffff",
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "700",
              fontFamily: "lato, sans-serif",
              fontSize: { xs: "14px", md: "16px", lg: "18px" },
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: "400",
              fontFamily: "lato, sans-serif",
              fontSize: "12px",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLeftArrow = (props: any) => {
  const { onClick } = props;
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: "-10px", md: "-36px", xl: "-60px" },
          transform: "translateY(-50%)  rotate(180deg)",
          maxWidth: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
          width: "100%",
          zIndex: "1",
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={svgs.Arrow}
          alt="arrow left"
        />
      </Box>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomRightArrow = (props: any) => {
  const { onClick } = props;
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: "-10px", md: "-36px", xl: "-60px" },
          zIndex: "1",
          transform: "translateY(-50%)",
          maxWidth: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
          width: "100%",
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          src={svgs.Arrow}
          alt="arrow left"
        />
      </Box>
    </>
  );
};
