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
    name: "James Adam",
    description: `Coach "James Adam" is a seasoned boxing expert with over 15
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
qualities.
`,
    image: webp.CoachJames,
    backgroundImage: "url(bgCoachJames.webp)",
    navImage: webp.NavJames,
    isSelected: true,
  },
  {
    name: "Daniel",
    description: `Coach “Daniel Jayson” is a highly respected boxing coach with 
    a reputation for transforming fighters into champions. With over a decade of
     experience, his approach combines technical precision, strategic insight, and
      an emphasis on mental resilience. His training sessions are intense, yet supportive, 
      helping each boxer develop their own unique style while mastering the fundamentals. 
      From first-timers to seasoned pros, she pushes everyone to exceed their own expectations.
      <br><br>
      Beyond his boxing expertise, he is known for her ability to inspire and uplift his fighters. 
      He believes that boxing is as much about building character as it is about learning technique.`,
    image: webp.CoachDaniel,
    backgroundImage: "url(bgCoachDaniel.webp)",
    navImage: webp.NavDaniel,
    isSelected: false,
  },
];
