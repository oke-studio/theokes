import * as React from "react";

const GalleryOne = [
    "/images/gallery1/Adura+Seyitan-Prewedding-370.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-551.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-680.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-1918.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-1970.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-2152.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-2289.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-2360.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-2377.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-2426.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-2448.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-2455.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-2463.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-2505.jpg",
    "/images/gallery1/Adura+Seyitan-Prewedding-2473.jpg",
];
const GalleryTwo = ["/images/gallery1/Adura+Seyitan-Prewedding-370.jpg"];

interface GalleryProps {
    gallery: "one" | "two";
    index?: number;
}

function RNG(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const getGalleryImage = ({
    gallery,
    index = RNG(-1, GalleryOne.length + 1),
}: GalleryProps) => {
    console.log(index);
    if (gallery === "one") {
        return GalleryOne[index] ?? GalleryOne[0];
    }
    return GalleryTwo[index] ?? GalleryTwo[0];
};
