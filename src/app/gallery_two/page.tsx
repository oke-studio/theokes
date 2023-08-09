"use client";
import {
    Box,
    Button,
    Grid,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import { GalleryTwo } from "@/app/utils/get-gallery-image.component";
import { Download } from "@mui/icons-material";
import Image from "next/image";

async function downloadImage(imageSrc: string) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = imageSrc;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function Page() {
    const GalleryRender = GalleryTwo;
    const isMobile = useMediaQuery("(max-width:640px)");

    const lazyLoadMobile = (index: number) => index !== 1 || 2 || 3;

    return (
        <Box
            sx={{
                backgroundColor: "black",
                color: "white",
                minHeight: "100vh",
            }}
        >
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    margin: "36px auto",
                    textAlign: "center",
                    borderBottom: "solid white 4px",
                    paddingBottom: "12px",
                }}
            >
                Gallery Two
                {/* <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                    }}
                >
                    <Download />
                </Box> */}
                {/* <Button
                    sx={{
                        position: "absolute",
                        top: "-10px",
                        right: 0,
                        color: "white",
                    }}
                    disableRipple
                >
                    <Download />
                </Button> */}
            </Box>
            {/* <Box sx={{ width: "100%" }}>
                <ImageList
                    sx={{ width: "100%", height: "100%" }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {GalleryRender.map((item, index) => (
                        <ImageListItem
                            key={`${index}_${item}`}
                            cols={index || 1}
                            rows={index || 1}
                        >
                            <img
                                {...srcset(item, 121, 3, 4)}
                                alt="some image"
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box> */}
            <Box sx={{ display: "flex" }}>
                <Box sx={{ height: "100%", width: "" }}></Box>
                <Box sx={{ width: "100%", height: "100%" }}>
                    <ImageList
                        variant="masonry"
                        cols={isMobile ? 1 : 3}
                        gap={isMobile ? 12 : 24}
                    >
                        {GalleryRender.map((item, index) => (
                            <ImageListItem
                                key={index}
                                sx={{
                                    position: "relative",
                                    ":hover": {
                                        opacity: 0.6,
                                        cursor: "pointer",
                                        transition: "opacity 0.6s ease 0s",
                                    },
                                }}
                            >
                                {/* <Image
                                    src={`${item}?w=248&fit=crop&auto=format`}
                                    alt="some image"
                                    loading="lazy"
                                    // srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    // width={100}
                                    fill
                                    // height={100}
                                    // style={{ width: "100%", height: "100%" }}
                                /> */}

                                <img
                                    src={`${item}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt="some image"
                                    loading={index % 2 === 0 ? "eager" : "lazy"}
                                />
                                <ImageListItemBar
                                    onClick={() => downloadImage(item)}
                                    sx={{
                                        background:
                                            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                                            "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                                    }}
                                    // title={item.title}
                                    position="top"
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: "white" }}
                                            aria-label={`image_${index}`}
                                        >
                                            <Download />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Box>
        </Box>
    );
}
