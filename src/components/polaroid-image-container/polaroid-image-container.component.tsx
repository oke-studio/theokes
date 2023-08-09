import * as React from "react";
import { Box, SxProps, styled, Theme } from "@mui/material";
import Image from "next/image";
import { getGalleryImage } from "@/app/utils/get-gallery-image.component";

export const PolaroidImageContainer = (
    wrapperStyles?: SxProps<Theme>,
    boxStyles?: SxProps<Theme>
) => {
    return (
        <Box
            sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                width: "175px",
                height: "215px",
                ...wrapperStyles,
            }}
        >
            <Box
                sx={{
                    margin: "8px",
                    position: "relative",
                    height: "70%",
                    top: "15px",
                    ...boxStyles,
                }}
            >
                <Image
                    src={getGalleryImage({ gallery: "two" })}
                    alt="some image"
                    // width={50}
                    // height={50}
                    objectFit="cover"
                    fill
                />
            </Box>
        </Box>
    );
};
