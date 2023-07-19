import { Box, Button, Divider, Menu, Typography } from "@mui/material"
import { ArrowSVG } from "../../../assets/svg"
import { useState } from "react";
import { MensCategories } from "../Categories";
import men1 from "../../../assets/images/Mens1.png"
import men2 from "../../../assets/images/Mens2.png"

export const MensCard = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Box>
            <Button variant="text" 
            endIcon={ArrowSVG} 
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
                Men
            </Button>
            <Menu anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',}}
            sx={{display: "flex", p: 3, gap: 3,}}
            >
                <Box sx={{display: "flex", gap: 3, justifyContent: "space-between"}}>
                    <Box sx={{width: "15rem",p:1}}>
                        <Typography component="h2" sx={{px:2}}>
                            MENSWEAR
                        </Typography>
                        <Divider/>
                        <Box sx={{display: "flex", flexDirection: "column", gap: 1, alignItems: "start", px: 1}}>
                            {MensCategories.map((item)=>{
                                return <Button variant="text" sx={{color: "black"}}>{item}</Button>
                            })}
                        </Box>
                    </Box>
                    <Box sx={{p: 4, display: "flex", gap: 2,}}>
                        <Box sx={{backgroundImage: `linear-gradient(to right, rgba(13, 13, 13, 0.46), rgba(13, 13, 13, 0.46)) ,url(${men1})`,
                        backgroundRepeat: "no-repeat",
                        width: "14rem",
                        height: "23rem",
                        objectFit: "contain",
                        display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                            <Box sx={{color: "white", display: "flex", flexDirection: "column", justifyContent: "flex-end", p:2}}>
                                <Typography component="h1">
                                    FANCY SUIT
                                </Typography>
                                <Typography sx={{fontSize: '1rem', }}>
                                    Made of eco-friendly material
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{backgroundImage: `linear-gradient(to right, rgba(13, 13, 13, 0.46), rgba(13, 13, 13, 0.46)) ,url(${men2})`,
                        backgroundRepeat: "no-repeat",
                        width: "14rem",
                        height: "23rem",
                        objectFit: "contain",
                        display: "flex", flexDirection: "column", justifyContent: "flex-end",}}>
                        <Box sx={{color: "white", display: "flex", flexDirection: "column", justifyContent: "flex-end", p:2 }}>
                                <Typography component="h1">
                                COMFY JACKET
                                </Typography>
                                <Typography sx={{fontSize: '1rem', }}>
                                Self confident everyday everytime
                                </Typography>
                            </Box> 
                        </Box>
                    </Box>
                </Box>
            </Menu> 
        </Box>
    )
}