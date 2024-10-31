import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function EnglandBoxingDetailSection() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const paragraph = {
    fontSize: {
      xs: "14px",
      md: "16px",
      xl: "20px",
    },
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "0px",
          backgroundColor: "#2a2a2a",
          padding: {
            xs: "40px 20px",
            sm: "60px 50px",
            md: "60px 50px",
            lg: "80px 100px",
          },
        }}
      >
        <Box sx={{ maxWidth: "1600px" }}>
          {/* main image  */}
          <Box data-aos="zoom-in" data-aos-duration="1000">
            <Image
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={webp.FuryVsSteel}
              alt="FuryVsSteel"
            />
          </Box>
          {/* heading  initial describtion */}
          <Box data-aos="fade-up" data-aos-duration="1000">
            <Typography
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
                padding: {
                  xs: "20px 0",
                  sm: "30px 0",
                  md: "40px 0",
                  xl: "60px 0",
                },
              }}
            >
              The Titan Showdown: Fury vs. Steel
            </Typography>
            <Typography sx={{ ...paragraph }}>
              {`On a cool October evening, boxing fans around the world witnessed one
          of the most electrifying battles in the history of the sport. The
          much-anticipated match between the undefeated champion Jack "Iron
          Fist" Steele and the ferocious up-and-comer, Rico "Thunder" Morales,
          had fans on the edge of their seats. Billed as the "Clash of Titans,"
          this bout promised to deliver a high-octane display of skill, power,
          and heart—and it did not disappoint.`}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              padding: {
                xs: "20px 0",
                sm: "30px 0",
                md: "40px 0",
                xl: "60px 0",
              },
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box
              data-aos="fade-right"
              data-aos-duration="1000"
              sx={{
                maxWidth: { xs: "700px", xl: "1000px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "30px",
              }}
            >
              <Typography sx={{ ...paragraph }}>
                Steele, a seasoned veteran with 35 wins and 0 losses, entered
                the ring with his signature steely determination. Known for his
                powerful jabs and impeccable defense, he was seen as the
                favorite. His opponent, Thunder, had stormed through the ranks
                with an explosive knockout record, leaving his last five
                opponents crumpled on the canvas in under five rounds. The crowd
                buzzed with excitement, knowing that while Steele had the
                experience, Thunder possessed raw, unpredictable power.
              </Typography>
              <Typography sx={{ ...paragraph }}>
                {`As the first round began, it became clear that both fighters were
              in peak form. Steele took control early, using his experience to
              keep Morales at bay with his crisp jabs and precise footwork.
              However, Thunder’s resilience and relentless pressure were evident
              as he absorbed blows and continued to press forward, looking for
              an opening.`}
              </Typography>
              <Typography sx={{ ...paragraph }}>
                {`By the fifth round, the fight took a dramatic turn. Morales,
              seemingly waiting for the perfect moment, unleashed a series of
              devastating hooks that shook Steele for the first time in his
              career. The crowd roared as Steele stumbled back, his defense
              faltering under the power of Thunder’s strikes. But Steele, ever
              the tactician, recovered with a perfectly timed uppercut that sent
              Morales reeling, showing the crowd why he was still the reigning
              champ.`}
              </Typography>
            </Box>
            <Box
              data-aos="fade-left"
              data-aos-duration="1000"
              sx={{
                width: { xs: "100%", sm: "450px", lg: "500px", xl: "550px" },
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={webp.Boxer1}
                alt="Boxer1"
              />
            </Box>
          </Box>
          <Box data-aos="fade-up" data-aos-duration="1000">
            <Typography sx={{ ...paragraph }}>
              The final rounds were a brutal test of endurance. Both men,
              bloodied and battered, fought with everything they had. Thunder,
              despite his early flurry, was showing signs of fatigue, while
              Steele, though shaken, kept his composure. In the last round,
              Steele landed a thunderous right hook that sent Morales to the
              canvas. The crowd held its breath as the referee counted, but
              somehow, Thunder rose to his feet just before the ten count, ready
              to keep fighting.
            </Typography>
            <Typography
              sx={{
                ...paragraph,
                padding: {
                  xs: "20px 0",
                  sm: "30px 0",
                  md: "40px 0",
                  xl: "60px 0",
                },
              }}
            >
              The match ended with a split decision, the judges awarding the
              victory to Jack Steele. Though Morales lost, he gained the respect
              of fans and fighters alike for his heart, resilience, and
              relentless pursuit of victory. Steele, now 36-0, remained the
              undisputed champion, but the world knew they had witnessed a fight
              for the ages—a battle that would be talked about for years to
              come.
            </Typography>
            <Typography sx={{ ...paragraph }}>
              Both fighters embraced in the ring, a sign of mutual respect. In
              this epic battle, there were no losers, only warriors who left
              everything they had under the bright lights of the ring.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
