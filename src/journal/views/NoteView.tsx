import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid2
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid2>
        <Typography fontSize={ 39 } fontWeight='light'>28 de agosto, 2023</Typography>
      </Grid2>

      <Grid2>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
        </Button>
      </Grid2>

      <Grid2 container width='100%'>
        <TextField
          type="text"
          value=""
          fullWidth
          placeholder="Enter a title"
          label="Title"
          sx={{ mb: 1, mt: 1, border: 'none' }}
        />

        <TextField
          type="text"
          value=""
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={ 5 }
        />
      </Grid2>

      {/* Image gallery */}

      <ImageGallery />
    </Grid2>
  )
}
