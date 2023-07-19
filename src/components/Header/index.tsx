import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { LogoSVG } from "../../assets/svg"
import { Link } from "react-router-dom"
import { SreachBar } from ".."
import { useState } from "react";
import ReactCountryFlag from "react-country-flag"
import { NotificationCard, ProfileCard } from "../Cards";

export const Header = ()=>{
    const [country, setCountry] = useState('English');
    const handleChange = (event: SelectChangeEvent)=>{
        setCountry(event.target.value as string)
    }
    return(
        <Box component="header" sx={{display: "flex", justifyContent: "space-between", px: 2, alignItems: "center",}}>
            <Box component="div" sx={{display: "flex", gap: 2, alignItems: "center"}}>
                <LogoSVG/>
                <Typography sx={{color: "#97404C", fontSize: "20px"}}>
                    <Link to="/home" style={{textDecoration: 'none', color: "#97404C"}}>FASHIONHOLIC</Link>
                </Typography>
            </Box>
            <SreachBar/>
            {/* <Box sx={{width: "9rem"}}>
                <FormControl>
                    <InputLabel>English</InputLabel>
                    <Select value={country} label="language" onChange={handleChange}>
                        <MenuItem value="English">
                            <ReactCountryFlag countryCode="US" svg/>
                            <Typography>English</Typography>
                        </MenuItem>
                        <MenuItem value="Indonesia">
                            <ReactCountryFlag countryCode="ID" svg/>
                            <Typography>Indonesia</Typography>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box> */}
            <Box sx={{display: "flex", gap: 2}}>
                <NotificationCard/>
                <ProfileCard/>
            </Box>
        </Box>
    )
}