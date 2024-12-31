import Image from "next/image";

import { Box } from "@mui/material";
import Slider from "react-slick";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FighterCard } from "./FignterCard";
import { fighterImages, fighters } from "@/app/constants/constants";
import svgs from "@/app/_assets/svgs";

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

const FightersSlider = ({
  activeFighter,
  setActiveFighter,
  sliderRef,
}: {
  activeFighter: string;
  setActiveFighter: React.Dispatch<React.SetStateAction<string>>;
  sliderRef: React.MutableRefObject<Slider | null>;
}) => {
  return (
    <>
      <Box
        className="slider-container"
        sx={{ maxWidth: { xs: "300px", sm: "1000px" }, width: "100%" }}
      >
        <Slider
          {...sliderSettings}
          beforeChange={(_currentSlide: number, nextSlide: number) => {
            setActiveFighter(fighterImages[nextSlide % 5].id);
          }}
          ref={sliderRef}
        >
          {fighters.map((fighter, index) => (
            <FighterCard
              key={index}
              name={fighter.name}
              description={fighter.description}
              imageSrc={fighter.imageSrc}
              isSelected={activeFighter === fighter.id}
            />
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default FightersSlider;
