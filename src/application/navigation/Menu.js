import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {menuData} from "./Data"
import {Link} from "react-router-dom"
import {styled} from "@mui/material"
import Router from "../router/Router";

const drawerWidth = 230;

const MenuLink = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    display: 'contents'
}));

export default function ClippedDrawer() {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 5}}>
                <Toolbar sx={{background: 'white'}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{color: 'black'}}>
                        P.Exchange
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth},
                }}
            >
                <Toolbar/>
                <Divider/>
                <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                    <List>
                        {
                            menuData.map((data) =>
                                <ListItem
                                    key={data.title}
                                    disablePadding
                                >
                                    <MenuLink to={data.link}>
                                    <ListItemButton>
                                            <ListItemIcon>
                                                {data.icon}
                                            </ListItemIcon>
                                        <ListItemText primary={data.title}/>
                                    </ListItemButton>
                                    </MenuLink>
                                </ListItem>
                            )
                        }
                    </List>
                </Box>
            </Drawer>
            <Router/>
        </Box>
    )
}