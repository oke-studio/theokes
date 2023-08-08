"use client";

import Image from "next/image";
import styles from "./page.module.css";

import {
    Box,
    styled,
    useMediaQuery,
    Button,
    Link,
    linkClasses,
} from "@mui/material";
import { East } from "@mui/icons-material";
import { getGalleryImage } from "./utils/get-gallery-image.component";

const StyledButton = styled(Button)(
    ({ theme }) => `
        color: white;
        gap: 12px;
        font-size: 24px;
        font-weight: 500;
        text-transform: none;
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
                            textShadow: `0 0 7px #fff,
                                        0 0 10px #fff,
                                        0 0 21px #fff,
                                        0 0 42px #906849,
                                        0 0 82px #906849,
                                        0 0 92px #906849,
                                        0 0 102px #906849,
                                        0 0 151px #906849`,
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
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                            gap: "20px",
                        }}
                    >
                        <Box></Box>
                        <Box>
                            we want your perspective from tonight!
                            <br />
                            take pictures on out virtual disposable
                            <br />
                            camera app
                        </Box>
                        <Box>
                            <StyledButton
                                sx={{
                                    backgroundColor: "#FFCA0B",
                                    color: "black",
                                    borderRadius: "14px",
                                    padding: "9px 22px",
                                    ":hover": {
                                        backgroundColor: "#FFCA0B",
                                    },
                                }}
                            >
                                <Link
                                    sx={{
                                        textDecoration: "none",
                                    }}
                                    color="inherit"
                                    href="https://pov.camera/qr/B92CEB64-D693-4FC5-B212-890ABDD5C91B"
                                    target="_blank"
                                >
                                    Join our photo stream
                                </Link>
                                <East />
                            </StyledButton>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                    width={90}
                                    height={90}
                                    src="/images/qr-code.png"
                                    alt="some image"
                                />
                                <Box>
                                    No download required.
                                    <br />
                                    Just scan and snap!
                                </Box>
                            </Box>
                        </Box>
                        {/* <Image
                            src={getGalleryImage({ gallery: "one", index: 0 })}
                            alt="Some picture"
                            width={100}
                            layout="responsive"
                            height={100}
                            loading="lazy"
                            objectFit="cover"
                        /> */}
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
                            src={getGalleryImage({ gallery: "one", index: 12 })}
                            alt="Some picture"
                            width={50}
                            layout="responsive"
                            height={10}
                            loading="lazy"
                            objectFit="cover"
                        />
                        <StyledButton sx={{ gap: "12px" }}>
                            See Gallery <East />
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
                            src={getGalleryImage({ gallery: "one", index: 9 })}
                            alt="Some picture"
                            width={100}
                            layout="responsive"
                            height={100}
                            loading="lazy"
                            // objectFit="cover"
                        />
                        <StyledButton>
                            See Gallery <East />
                        </StyledButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
