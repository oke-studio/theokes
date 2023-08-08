"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { Box, styled, useMediaQuery, Button } from "@mui/material";
import { East } from "@mui/icons-material";
import { getGalleryImage } from "./utils/get-gallery-image.component";

const StyledButton = styled(Button)(
    ({ theme }) => `
        color: white;
`
);

export default function Home() {
    const isMobile = useMediaQuery("(max-width:640px)");

    return (
        <Box sx={{ backgroundColor: "black", width: "100vw", height: "100vh" }}>
            <Box
                sx={{
                    display: "flex",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    margin: "0 auto",
                    maxWidth: "90vw",
                    alignItems: "center",
                    gap: "24px",
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                    }}
                >
                    <Box
                        sx={{
                            fontFamily: "Bayshore",
                            color: "#906849",
                            fontWeight: "400",
                            fontSize: "142px",
                        }}
                    >
                        The Oke's
                    </Box>
                    <Box>thank you so much for celebrating with us.</Box>
                    <Box>
                        <Box>xo,</Box>
                        <Box>adura & seyitan</Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "grid",
                        // flexDirection: isMobile ? "column" : "row",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        height: "100%",
                        gap: "64px",
                        width: "100%",
                    }}
                >
                    <Box sx={{ width: "100%" }}>
                        <Image
                            src={getGalleryImage({ gallery: "one", index: 0 })}
                            alt="Some picture"
                            width={100}
                            layout="responsive"
                            height={100}
                            loading="lazy"
                            objectFit="cover"
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "16px",
                            // height: "60%",
                        }}
                    >
                        <Image
                            src={getGalleryImage({ gallery: "one", index: 9 })}
                            alt="Some picture"
                            width={100}
                            layout="responsive"
                            height={100}
                            loading="lazy"
                            objectFit="cover"
                        />
                        <StyledButton sx={{ gap: "12px" }}>
                            See gallery <East />
                        </StyledButton>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "16px",
                            // height: "60%",
                        }}
                    >
                        <Image
                            src={getGalleryImage({ gallery: "one" })}
                            alt="Some picture"
                            width={100}
                            layout="responsive"
                            height={100}
                            loading="lazy"
                            // objectFit="cover"
                        />
                        <StyledButton sx={{ gap: "12px" }}>
                            See gallery <East />
                        </StyledButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
