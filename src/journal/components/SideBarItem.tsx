import { TurnedInNot } from "@mui/icons-material"
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"

interface Props {
  title: string,
  body: string,
  id: string,
  setActive: ( id: string ) => void
}

export const SideBarItem = ({ title, body, id, setActive }: Props) => {

  const newTitle = useMemo( () => {
    return title.length > 17 
        ? title.substring(0, 17) + '...'
        : title;
  },[ title ])

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ () => setActive( id ) }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid2 container>
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={ body } />
        </Grid2>

      </ListItemButton>
    </ListItem>
  )
}
