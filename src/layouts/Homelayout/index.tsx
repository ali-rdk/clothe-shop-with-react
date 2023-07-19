import { Box, Container } from "@mui/material"
import { Footer, Header, MenuBar } from "../../components"
import { MainLayout } from "../MainLayout"
import { ILayout } from "../types"
import { Outlet } from "react-router-dom"


export const HomeLayout = ()=> {
    return(
        <>
                <MenuBar/>
                {/* <Box sx={{backgroundColor: '#EAEAEA'}}>
                    <Container maxWidth="lg">{children}</Container>
                </Box> */}
                <Outlet/>
            
        </>
    )
}