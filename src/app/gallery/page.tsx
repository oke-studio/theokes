"use client";
import {
    Box,
    Button,
    Grid,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    useMediaQuery,
    IconButton,
} from "@mui/material";
import {
    GalleryOne,
    GalleryTwo,
} from "@/app/utils/get-gallery-image.component";
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
    const isMobile = useMediaQuery("(max-width:640px)");

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
                Gallery One
                {/* <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                    }}
                >
                    <Download />
                </Box> */}
                <Button
                    sx={{
                        position: "absolute",
                        top: "-10px",
                        right: 0,
                        color: "white",
                    }}
                    disableRipple
                >
                    <Download />
                </Button>
            </Box>

            <Box sx={{ display: "flex" }}>
                <Box sx={{ height: "100%", width: "" }}></Box>
                <Box sx={{ width: "100%", height: "100%" }}>
                    {/* <ImageList variant="masonry" cols={3} gap={24}>
                        {GalleryRender.map((item, index) => (
                            <ImageListItem key={index}>
                                {/* <Image
                                    src={`${item}?w=248&fit=crop&auto=format`}
                                    alt="some image"
                                    loading="lazy"
                                    // srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    width={100}
                                    height={100}
                                    style={{ width: "auto", height: "100%" }}
                                /> 

                                <img
                                    src={`${item}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt="some image"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList> */}

                    <ImageList
                        sx={{ width: "100%", height: "100%" }}
                        variant="quilted"
                        cols={isMobile ? 2 : 4}
                        rowHeight="auto"
                        gap={24}
                    >
                        {GalleryOneData.map((item, index) => (
                            <ImageListItem
                                key={item.img}
                                cols={isMobile ? 1 : item.cols || 1}
                                rows={isMobile ? 1 : item.rows || 1}
                                sx={{
                                    ":hover": {
                                        // opacity: 0.5,
                                        cursor: "pointer",
                                        transition: "opacity 0.2s ease 0s",
                                    },
                                }}
                            >
                                <img
                                    {...srcset(
                                        item.img,
                                        150,
                                        item.rows,
                                        item.cols
                                    )}
                                    alt="some image"
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    onClick={() => downloadImage(item.img)}
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

const GalleryOneData = [
    { img: GalleryOne[0], rows: 2, cols: 2 },
    { img: GalleryOne[1] },
    { img: GalleryOne[2], rows: 0, cols: 2 },
    { img: GalleryOne[3], cols: 2 },
    { img: GalleryOne[4], rows: 2, cols: 2 },
    { img: GalleryOne[5], rows: 2 },
    { img: GalleryOne[6] },
    { img: GalleryOne[7] },
    { img: GalleryOne[8], rows: 2, cols: 2 },
    { img: GalleryOne[9], cols: 2 },
    { img: GalleryOne[10], rows: 2, cols: 2 },
    { img: GalleryOne[11] },
    { img: GalleryOne[12], cols: 2 },
    { img: GalleryOne[14], cols: 2, rows: 2 },
    { img: GalleryOne[13], rows: 2, cols: 2 },
];
