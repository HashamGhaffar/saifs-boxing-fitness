"use client";
import { Box, Typography, Button, Pagination } from "@mui/material";
import Image from "next/image";
import webp from "@/app/_assets/webp";
import { useRouter } from "next/navigation";

export default function EnglandBoxingCardBox() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "0px",
        backgroundColor: "#2a2a2a",
        padding: {
          xs: "40px 20px 0 20px",
          sm: "60px 50px 0 50px ",
          md: "60px 50px 0 50px ",
          lg: "80px 100px 0 100px ",
        },
      }}
    >
      <EnglandBoxingCard onClick={() => router.push("england-boxing-detail")} />
      <EnglandBoxingCard onClick={() => router.push("england-boxing-detail")} />
      <EnglandBoxingCard onClick={() => router.push("england-boxing-detail")} />
      <EnglandBoxingCard onClick={() => router.push("england-boxing-detail")} />

      <Pagination
        count={5}
        shape="rounded"
        sx={{
          paddingBottom: {
            xs: "40px",
            sm: "60px",
            md: "60px",
            lg: "80px",
          },
          marginTop: "20px",
          "& .MuiPaginationItem-root": {
            color: "#FFFFFF",
            margin: "0 2px",
          },
          "& .MuiPaginationItem-previousNext": {
            color: "#F63333",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#F63333",
            color: "#FFFFFF",
            borderRadius: "0px",
          },
        }}
      />
    </Box>
  );
}

export function EnglandBoxingCard({
  onClick = () => {},
}: {
  onClick?: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
        gap: { xs: "20px", md: "40px" },
        maxWidth: "1400px",
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        paddingBottom: {
          xs: "40px",
          sm: "60px",
          md: "60px",
          lg: "80px",
        },
      }}
    >
      <Box
        sx={{ height: { md: "380px" }, width: { sm: "500px", md: "400px" } }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px",
            objectFit: "cover",
          }}
          src={webp.Signature}
          alt="Signature"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: { xs: "800px", md: "400px", lg: "600px", xl: "800px" },
          width: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#F63333",
              fontWeight: "400",
              fontFamily: "Anton, sans-serif",
              fontSize: {
                xs: "20px",
                sm: "24px",
                md: "30px",
                lg: "40px",
                xl: "48px",
              },
              textTransform: "uppercase",
            }}
          >
            The Titan Showdown: Fury vs. Steel
          </Typography>
          <Typography
            sx={{
              padding: {
                xs: "10px 0",
                sm: "20px 0",
                md: "15px 0",
                lg: "20px 0",
              },
              fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "20px" },
              fontWeight: "400",
              color: "#ffffff",
            }}
          >
            {` Two powerhouses collide in the ring as Fury, known for his lightning-fast strikes,
             faces Steel, the unstoppable force with unmatched resilience. Will speed outclass 
             raw strength, or will Steel's endurance reign supreme? Witness this electrifying 
             bout of skill, power, and determination.`}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "20px" },
              fontWeight: "700",
              color: "#9C9C9C",
              textTransform: "uppercase",
            }}
          >
            october 15, 2024
          </Typography>
        </Box>

        <Box sx={{ marginTop: { xs: "15px", sm: "50px", md: "0" } }}>
          <Button
            onClick={onClick}
            variant="outlined"
            sx={{
              color: "#FFFFFF",
              borderColor: "#FFFFFF",
              borderRadius: "0px",
              border: "0px",
              borderBottom: "2px solid #FFFFFF",
              padding: "10px 0",
              fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "20px" },
              "&:hover": {
                backgroundColor: "#2a2a2a",
              },
            }}
          >
            read more
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
