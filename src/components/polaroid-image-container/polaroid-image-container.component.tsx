import * as React from "react";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import { getGalleryImage } from "@/app/utils/get-gallery-image.component";

export const PolaroidImageContainer = () => {
    return (
        <Box sx={{ backgroundColor: "white", borderRadius: "5px" }}>
            <Image src={getGalleryImage({ gallery: "one" })} alt="some image" />
        </Box>
    );
};
