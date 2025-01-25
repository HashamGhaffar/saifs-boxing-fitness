import { StaticImageData } from "next/image";
import webp from "../_assets/webp";

export interface CoachCardProps {
  name: string;
  description: string;
  image: StaticImageData;
  backgroundImage: string;
  navImage: StaticImageData;
  isSelected?: boolean;
}

export const Coaches: CoachCardProps[] = [
  {
    name: "Safe",
    description: `Coach Saif is a highly respected boxing coach with 
    a reputation for transforming fighters into champions. With over a decade of
     experience, his approach combines technical precision, strategic insight, and
      an emphasis on mental resilience. His training sessions are intense, yet supportive, 
      helping each boxer develop their own unique style while mastering the fundamentals. 
      From first-timers to seasoned pros, she pushes everyone to exceed their own expectations.
      <br><br>
      Beyond his boxing expertise, he is known for her ability to inspire and uplift his fighters. 
      He believes that boxing is as much about building character as it is about learning technique.`,
    image: webp.CoachDaniel,
    backgroundImage: "url(bgCoachJames.webp)",
    navImage: webp.NavDaniel,
    isSelected: false,
  },
  {
    name: "Basit",
    description: `Coach Basit is a seasoned boxing expert with over 15
      years of experience in the ring. Known for his relentless
      drive and attention to detail, he has trained everyone from
      beginners to competitive fighters, tailoring his approach to
      fit each individual’s needs. His unique blend of technical
      mastery and motivational coaching style makes him a favorite
      among those who want to push past their limits and unlock
      their full potential. With a background in both amateur and
      professional boxing, he brings a wealth of knowledge and a
      hands-on approach to every session. His focus is not just on
      perfecting technique, but also on building mental toughness,
      confidence, and discipline qualities.<br><br>
      With a background in both amateur and professional boxing, he
      brings a wealth of knowledge and a hands-on approach to every
      session. His focus is not just on perfecting technique, but
      also on building mental toughness, confidence, and discipline
      qualities.`,
    image: webp.Basit,
    backgroundImage: "url(bgCoachJames.webp)",
    navImage: webp.Basit,
    isSelected: true,
  },
];

export interface FighterCardProps {
  index: number;
  name: string;
  description: string;
  imageSrc: StaticImageData;
  id: string;
}

export const fighters: FighterCardProps[] = [
  {
    index: 0,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter1,
    id: "fighter1",
  },
  {
    index: 1,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter2,
    id: "fighter2",
  },
  {
    index: 2,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter3,
    id: "fighter3",
  },
  {
    index: 3,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter4,
    id: "fighter4",
  },
  {
    index: 4,
    name: "Allen Rivera",
    description:
      "A fierce middleweight champion known for her precision strikes",
    imageSrc: webp.Fighter5,
    id: "fighter5",
  },
];

export interface FighterImage {
  index: number;
  imagePath: StaticImageData;
  alt: string;
  id: string;
}

export const fighterImages: FighterImage[] = [
  { index: 0, imagePath: webp.Fighter1, alt: "fighter1", id: "fighter1" },
  { index: 1, imagePath: webp.Fighter2, alt: "fighter2", id: "fighter2" },
  { index: 2, imagePath: webp.Fighter3, alt: "fighter3", id: "fighter3" },
  { index: 3, imagePath: webp.Fighter4, alt: "fighter4", id: "fighter4" },
  { index: 4, imagePath: webp.Fighter5, alt: "fighter5", id: "fighter5" },
];
