import { Box, Container } from "@mui/material"
import { KidsCard, MensCard, SportsCard, WomenCard } from "../Cards"


export const MenuBar = () =>{
    return(
        <Box component="div" sx={{backgroundColor: "#808080",}}>
            <Container maxWidth="md" sx={{py: 0.5, mx: "auto", display: "flex", justifyContent: "center", gap: 5,}}>
                    <MensCard/>

                    <WomenCard/>

                    <SportsCard/>

                    <KidsCard/>
            </Container>
        </Box>
    )
}