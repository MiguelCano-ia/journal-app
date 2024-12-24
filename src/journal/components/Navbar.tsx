import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material"
import { startLogout, useAppDispatch } from "../../store"

export const Navbar = ({ drawerWidth = 240 }) => {

  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <AppBar 
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)`},
        ml: { sm: `${ drawerWidth }px` }
       }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid2
          container
          width='100%'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h6' noWrap component='div'> Journal App </Typography>
          <IconButton color='error' onClick={ onLogout }>
            <LogoutOutlined />
          </IconButton>
        </Grid2>

      </Toolbar>
    </AppBar>
  )
}
