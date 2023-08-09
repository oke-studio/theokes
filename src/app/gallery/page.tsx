import { Box } from "@mui/material";

export default function Gallery({ params }: { params: { slug: string } }) {
    const { slug } = params;
    return <Box>{slug}</Box>;
}
