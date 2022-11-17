import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Appliances',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

const drawerWidth = 240;
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Overview() { 
    return (
        <>
            <h3>Overview</h3>


            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Line options={options} data={data} />
                </Grid>
                <Grid container xs={6} lg={6} spacing={2} direction='column'>
                    <Grid xs={4} lg={6}>
                        <Item> Request for access</Item>
                    </Grid>
                    <Grid xs={4} lg={6}>
                        <Item>External logins </Item>
                    </Grid>
                    <Grid xs={4} lg={6}>
                        <Item>External Users</Item>
                    </Grid>
                </Grid>
                
            </Grid>

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
                anchor="right"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem key='Licenses' disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Licenses' />
                        </ListItemButton>   
                    </ListItem>
                    <Divider/>
                    <ListItem key='OnlineUsers' disablePadding>
                        <ListItemButton>
                        <ListItemText primary='Online users last 30 days' />
                        </ListItemButton>   
                    </ListItem>
                    <Divider/>
                    <ListItem key='DataUsages' disablePadding>
                    <ListItemButton>
                        <ListItemText primary='Data Usages' />
                    </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem key='TeamOverview' disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Team OVerview' />
                        </ListItemButton>   
                    </ListItem>
                </List>
                
            </Drawer>
        
        </Box>

        </>
        
    )

}