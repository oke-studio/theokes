import * as React from "react";
import { Box, SxProps, styled, Theme } from "@mui/material";
import Image from "next/image";
import { getGalleryImage } from "@/app/utils/get-gallery-image.component";

export const PolaroidImageContainer = ({
    wrapperStyles,
}: {
    wrapperStyles?: SxProps<Theme>;
}) => {
    return (
        <Box
            sx={[
                {
                    backgroundColor: "white",
                    borderRadius: "5px",
                    width: "175px",
                    height: "215px",
                },
                ...(Array.isArray(wrapperStyles)
                    ? wrapperStyles
                    : [wrapperStyles]),
            ]}
        >
            <Box
                sx={{
                    margin: "8px",
                    position: "relative",
                    height: "70%",
                    top: "15px",
                }}
            >
                <Image
                    src={getGalleryImage({ gallery: "two" })}
                    alt="some image"
                    // width={50}
                    // height={50}
                    objectFit="cover"
                    loading="eager"
                    fill
                />
            </Box>
        </Box>
    );
};
