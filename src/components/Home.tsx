import SideMenu from "./SideMenu";
import Grid2 from '@mui/material/Unstable_Grid2';
import TopMenu from "./TopMenu";
import Content from "./Content";



export default function Home() { 
    
    return (
        <>
            <div>
                <Grid2 container spacing={1}>
                    <Grid2 xs={12}>
                        <TopMenu/>
                    </Grid2>
                </Grid2>
            </div>
            <Grid2 container spacing={2}>
                <Grid2 xs={3}>
                    <SideMenu/>
                </Grid2>
                <Grid2 xs={9}>
                    <Content/>
                </Grid2>
            </Grid2>
        </>
    )

}