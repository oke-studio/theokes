import { Box, Button, Grid, ImageList, ImageListItem } from "@mui/material";
import {
    GalleryOne,
    GalleryTwo,
} from "@/app/utils/get-gallery-image.component";
import { Download } from "@mui/icons-material";
import Image from "next/image";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function Page() {
    const GalleryRender = GalleryOne;
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
                    <ImageList variant="masonry" cols={3} gap={24}>
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
                                /> */}

                                <img
                                    src={`${item}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt="some image"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Box>
        </Box>
    );
}
