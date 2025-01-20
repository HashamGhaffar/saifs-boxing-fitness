import {
  Box,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import svgs from "@/app/_assets/svgs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Schedule() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const headingStyle = {
    border: "none",
    backgroundColor: "#ffffff",
    color: "#F63333",
    fontSize: "13px",
    fontWeight: "700",
    textAlign: "center",
    padding: "10px",
    borderRadius: "6px",
    textTransform: "uppercase",
  };

  const paragraphStyle = {
    backgroundColor: "#0D0D0DB2",
    border: "1.6px solid #D9D9D9",
    textWrap: "nowrap",
    textAlign: "center",
    borderRadius: "6px",
  };

  const topic = {
    fontSize: "12px",
    fontWeight: "900",
  };

  const tableRows = [
    {
      time: "10:00AM - 11:00AM",
      activities: ["-", "-", "-", "-", "-", "Girls Only", "-"],
    },
    {
      time: "11:00AM - 12:00AM",
      activities: [
        "-",
        "Afternoon Session",
        "-",
        "-",
        "-",
        "5-8 Years Old",
        "5-8 Years Old",
      ],
    },
    {
      time: "12:00PM - 1:00PM",
      activities: [
        "Afternoon Session",
        "-",
        "Afternoon Session",
        "-",
        "-",
        "9 Years Old +",
        "9 Years Old +",
      ],
    },
    {
      time: "1:00PM - 2:00PM",
      activities: ["-", "-", "-", "-", "-", "Open Class", "Open Class"],
    },
    {
      time: "5:30PM - 7:00PM",
      activities: [
        "Adults & Senior",
        "Adults & Senior",
        "Adults & Senior",
        "Adults & Senior",
        "Adults & Senior",
        "-",
        "-",
      ],
    },
    {
      time: "7:00PM - 8:00PM",
      activities: [
        "Juniors Boxing",
        "Juniors Boxing",
        "Juniors Boxing",
        "Juniors Boxing",
        "Juniors Boxing",
        "-",
        "-",
      ],
    },
    {
      time: "8:00PM - 9:00PM",
      activities: [
        "For All",
        "For All",
        "For All",
        "For All",
        "For All",
        "-",
        "-",
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url(bgSchedule.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
    >
      <Box
        sx={{
          maxWidth: "1600px",
          width: "100%",
        }}
      >
        {/* Heading */}
        <Typography
          // data-aos="fade-right"
          // data-aos-duration="1000"
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
          Our Schedule
        </Typography>

        {/* Table */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ maxWidth: "1600px", width: "100%" }}>
            <TableContainer
            //  data-aos="fade-up" data-aos-duration="1000"
            >
              <Table
                sx={{
                  "& .MuiTableCell-root": { padding: "10px 5px" },
                  tableLayout: "auto",
                  borderCollapse: "separate",
                  borderSpacing: { xs: "20px 15px", xl: "30px 25px" },
                }}
              >
                {/* Table Header */}
                <TableRow>
                  <TableCell
                    sx={{
                      ...headingStyle,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ height: "55px", width: "95px" }}>
                      <Image
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                        }}
                        src={svgs.Clock}
                        alt="clock"
                      />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ ...headingStyle }}>Monday</TableCell>
                  <TableCell sx={{ ...headingStyle }}>Tuesday</TableCell>
                  <TableCell sx={{ ...headingStyle }}>Wednesday</TableCell>
                  <TableCell sx={{ ...headingStyle }}>Thursday</TableCell>
                  <TableCell sx={{ ...headingStyle }}>Friday</TableCell>
                  <TableCell sx={{ ...headingStyle }}>Saturday</TableCell>
                  <TableCell sx={{ ...headingStyle }}>Sunday</TableCell>
                </TableRow>

                {/* Table Rows */}
                {tableRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ ...headingStyle }}>{row.time}</TableCell>
                    {row.activities.map((activity, idx) => (
                      <TableCell key={idx} sx={{ ...paragraphStyle }}>
                        <Typography sx={{ ...topic }}>{activity}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
