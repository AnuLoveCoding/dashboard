import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Person2Icon from '@mui/icons-material/Person2';
import ClassIcon from '@mui/icons-material/Class';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EventIcon from '@mui/icons-material/Event';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from "./Home";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>

      <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <HomeIcon />
              </ListItemIcon>
              <ListItemText >
                Home
              </ListItemText>
            </ListItemButton>
          </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <HomeIcon />
              </ListItemIcon>
              <ListItemText >
                Leaderboard
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <HomeIcon />
              </ListItemIcon>
              <ListItemText >
                Orders
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <HomeIcon />
              </ListItemIcon>
              <ListItemText >
                SalesReport
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <AssessmentIcon />
              </ListItemIcon>
              <ListItemText >
                My Student Result
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <Person2Icon />
              </ListItemIcon>
              <ListItemText >
                My Student 
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <ClassIcon />
              </ListItemIcon>
              <ListItemText >
                My Classes 
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <AssignmentIcon />
              </ListItemIcon>
              <ListItemText >
                Assignment 
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <NotificationsNoneIcon />
              </ListItemIcon>
              <ListItemText >
                Notification
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <EventIcon />
              </ListItemIcon>
              <ListItemText >
                Events
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <HolidayVillageIcon />
              </ListItemIcon>
              <ListItemText >
                Holidays
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <LocalLibraryIcon />
              </ListItemIcon>
              <ListItemText >
                My Student Result
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <FormatClearIcon />
              </ListItemIcon>
              <ListItemText >
                My Syllabus
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText >
                My leave request
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <HomeIcon />
              </ListItemIcon>
              <ListItemText >
                Daily Timing
              </ListItemText>
            </ListItemButton>
       </ListItem>

       <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <LogoutIcon />
              </ListItemIcon>
              <ListItemText >
                Logout
              </ListItemText>
            </ListItemButton>
       </ListItem>

        
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;