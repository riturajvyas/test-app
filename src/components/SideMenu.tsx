import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import { updateContent } from '../redux/action';

const drawerWidth = 240;

export default function SideMenu() {

//@ts-ignore
const dispatch = useDispatch();

const switchClassicView = () => {};
const handleOverview = () => {dispatch(updateContent('Overview'))};
const handleTeam = () => {dispatch(updateContent('Team'))};
const handleAppliances = () => {dispatch(updateContent('Appliances'))};

  return (
    <div className='sidemenu'>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer style={{ zIndex: 0 }}
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem key='Overview' disablePadding>
                        <ListItemButton onClick={handleOverview}>
                            <ListItemText primary='Overview' />
                        </ListItemButton>   
                    </ListItem>
                    <ListItem key='Team' disablePadding>
                        <ListItemButton onClick={handleTeam}>
                        <ListItemText primary='Team' />
                        </ListItemButton>   
                    </ListItem>
                    <ListItem key='Appliances' disablePadding>
                    <ListItemButton onClick={handleAppliances}>
                        <ListItemText primary='Appliances' />
                    </ListItemButton>   
                    </ListItem>
                    <ListItem key='License and hardware' disablePadding>
                        <ListItemButton onClick={handleOverview}>
                            <ListItemText primary='License and hardware' />
                        </ListItemButton>   
                    </ListItem>
                    <ListItem key='Support' disablePadding>
                        <ListItemButton onClick={handleOverview}>
                            <ListItemText primary='Support' />
                        </ListItemButton>   
                    </ListItem>
                    <ListItem key='Tips and Training' disablePadding>
                        <ListItemButton onClick={handleOverview}>
                            <ListItemText primary='Tips and Training' />
                        </ListItemButton>   
                    </ListItem> 
                </List>
                <Divider />
                <br></br><br></br>
                <Button onClick={switchClassicView} style={{border:1, color: 'grey', backgroundColor: 'lightblue' }}>
                    Switch to classic view
                </Button>
            </Drawer>
        
        </Box>
    </div>    
  );
}