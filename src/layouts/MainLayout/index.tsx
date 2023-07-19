import { Box } from "@mui/material"
import { Header } from "../../components"
import { Footer } from "../../components/Footer"
import { ILayout } from "../types"
import { Outlet } from "react-router-dom"


export const MainLayout = ()=> {
    return(
        <>
            <Header/>
            {/* <Box component="main" sx={{py: 2}}>{children}</Box> */}
            <Outlet/>
            <Footer/>
        </>
    )
}