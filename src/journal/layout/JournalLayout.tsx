import { Box, Toolbar } from "@mui/material"
import { Navbar, Sidebar } from "../components";

interface JournalLayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

export const JournalLayout = ({ children }: JournalLayoutProps) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Navbar drawerWidth={ drawerWidth } />

      <Sidebar drawerWidth={ drawerWidth } />

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >

        <Toolbar />

        { children }
      </Box>
    </Box>
  )
}
