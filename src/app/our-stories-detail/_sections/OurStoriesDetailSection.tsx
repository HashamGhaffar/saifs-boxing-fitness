import { Box, Typography } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";

export default function OurStoriesDetailSection() {
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
          backgroundColor: "white",
          color: "#2a2a2a",
          padding: {
            xs: "40px 20px",
            sm: "60px 50px",
            md: "60px 50px",
            lg: "80px 100px",
          },
        }}
      >
        <Box sx={{ maxWidth: "1600px" }}>
          {/* Main image */}
          {/* <Box>
            <Image
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={webp.FuryVsSteel}
              alt="FuryVsSteel"
            />
          </Box> */}
          {/* Heading and initial description */}
          <Box>
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
              From Rock Bottom to the Ring: How Boxing Changed My Life
            </Typography>
            <Typography sx={{ ...paragraph }}>
              At the young age of 11, my brother tragically passed away. After
              that, I did nothing with my life but go to school, eat, and play
              PlayStation. I hit rock bottom because I felt like I had no one
              left to guide me. Kids would laugh and make jokes, knowing it
              would make me angry, and I struggled to control my emotions. This
              led to frequent fights and caused a lot of distress for my mum. It
              all felt out of control because I lacked discipline. Primary
              school was particularly tough because not many kids had diabetes.
              From a very young age, it had a huge impact on my life. I felt
              like the odd one out, and other kids would laugh and make fun of
              me because of it. My weight was also out of control due to my
              diabetes. It felt like there was no way to manage it.
              <b>Until...</b>I discovered Saif&apos;s Boxing and Fitness. There
              was only one thing to do: Join! After lockdown, I started out at a
              heavy weight of over 110kg. Slowly but surely, my weight began to
              drop, and my coach was the first person to see any potential in
              me. He promised me that if I got under 80kg, I could have my first
              amateur bout&mdash;and I kept pushing towards that goal. It was a
              tough journey, but the moment I had been waiting for finally
              arrived. 79kg. My first fight. My first win. From there, my weight
              continued to drop: 77kg, 75kg, 73kg, 72kg. I went on to win my
              first Yorkshire title, then another, and another.
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
              sx={{
                maxWidth: { md: "700px", xl: "1000px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                width: "100%",
                gap: { xs: "10px", lg: "0px" },
              }}
            >
              <Typography sx={{ ...paragraph }}>
                During my amateur boxing career, I entered the championships
                after only five bouts. In the competition, I was matched against
                a highly skilled, top-tier boxer with five times my experience.
                He was a 4&times; national champion who had stopped nearly
                everyone he&apos;d faced. People told my coach it was a bad idea
                for me to fight him. But Saif believed in me when no one else
                did. The fight went the full distance, and I gave him a real
                challenge.
              </Typography>
              <Typography sx={{ ...paragraph }}>
                However, due to medical reasons, my weight went out of control
                again. It felt like there was nothing I could do, and I thought
                my boxing journey was over. But my coach encouraged me to keep
                going and entered me into championships at 80kg+, which was four
                weight categories above where I should have been. It was a
                daunting challenge because I was up against boys much bigger and
                naturally strong.
              </Typography>
              <Typography sx={{ ...paragraph }}>
                In the first fight of the championships, I faced a boy who was
                taller, more muscular, and far stronger than me. He had
                previously won the Yorkshire semi-finals by stoppage. Despite
                the odds, my coach believed I could do it, and I won by
                unanimous points decision, earning my third Yorkshire title.
                Next, I fought another skilled opponent while I was ill and
                didn&apos;t feel up to it. But once again, Saif encouraged me to
                push forward, and I won. That victory placed me in the top three
                boys in England. Unfortunately, I lost my next bout, but I gave
                my opponent a tough fight. I secured a bronze medal and ranked
                in the top three in the country, competing at a weight I should
                never have been in. Despite the challenges of living with
                diabetes and the heartbreaking loss of my brother, everything
                turned around.
              </Typography>
              <Typography sx={{ ...paragraph }}>
                This is all thanks to the gym. Joining Saif&apos;s Boxing and
                Fitness was the best decision I ever made. I can&apos;t express
                how grateful I am for everything Saif has done for me and
                everyone else at the gym.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "450px", lg: "500px", xl: "550px" },
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={webp.Bubbles}
                alt="Boxer1"
              />
            </Box>
          </Box>
          <Box>
            <Typography sx={{ ...paragraph }}>
              Why? Because he created a family, taught us discipline, and showed
              us love. For me, he became like an older brother. We owe so much
              to Saif, and this is my way of saying a massive thank you to him
              for everything he&apos;s done for me and the gym&apos;s community.
              In a nutshell, I went from being a sad, overweight, and unpopular
              kid to a confident, disciplined young man&mdash;all thanks to Saif
              and the gym. &mdash; Ibraheem Nisar
            </Typography>
          </Box>
        </Box>
      </Box> 
    </>
  );
}
