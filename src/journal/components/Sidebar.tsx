import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../store"
import { SideBarItem } from "./SideBarItem";
import { setActiveNote } from "../../store/journal";

export const Sidebar = ({ drawerWidth = 240 }) => {

  const dispatch = useAppDispatch();
  const { user: { displayName } } = useAppSelector( state => state.auth);
  const { notes } = useAppSelector( state => state.journal );

  const setActive = ( id: string ) => {
    const note = notes.find( note => note.id === id);
    if ( note ) {
      dispatch( setActiveNote( note ) );
    }
  }

  return (
    <Box
      component='nav'
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 }
      }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            { displayName }
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            notes.map( note => (
              <SideBarItem
                key={ note.id } 
                {...note }
                setActive={ setActive }
              />  
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
