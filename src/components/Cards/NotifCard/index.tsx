import { Box, Divider, IconButton, Menu, Switch, Typography } from "@mui/material"
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { useState } from "react";

export const NotificationCard = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return(
        <Box sx={{display: "flex", alignItems: "center"}}>
            <IconButton aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
                <NotificationsActiveOutlinedIcon/>
            </IconButton>
            <Menu anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',}}
            sx={{display: "flex", flexDirection: "column", gap:2}}>
                <Box sx={{width: "27rem", }}>
                    <Box sx={{height: "4rem",display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Typography sx={{fontSize: "1.4rem",p: 2,}}>
                            Notifications
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <Typography>
                                Do not disturb
                            </Typography>
                            <Switch {...label} color="secondary"/>
                        </Box>
                    </Box>
                    <Divider/>
                    <Box sx={{alignItems: "center", textAlign: "center", }}>
                        <Typography component="h1" sx={{p:3}}>No massage</Typography>
                    </Box>
                </Box>
            </Menu>
        </Box>
    )
}