import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSaveNote } from "../../store/journal";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

  const dispatch = useAppDispatch();
  const { active: note, messageSaved, isSaving } = useAppSelector( state => state.journal );

  const { body, title, date, onInputChange, formState } = useForm( note );

  const dateString = useMemo( () => {
    const newDate = new Date( date );
    return newDate.toUTCString();
  }, [ date ]);

  useEffect(() => {
    dispatch( setActiveNote( formState ) );
  }, [ formState ]);

  useEffect(() => {
    if ( messageSaved.length > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your note has been saved",
        showConfirmButton: false,
        timer: 1300
      })
    }
  }, [ messageSaved ])
  
  const onSaveNote = () => {
    dispatch( startSaveNote() );
  }

  return (
    <Grid2
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Grid2>
        <Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
      </Grid2>

      <Grid2>
        <Button 
          disabled={ isSaving }
          color="primary" 
          sx={{ padding: 2 }}
          onClick={ onSaveNote }
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
        </Button>
      </Grid2>

      <Grid2 container width='100%'>
        <TextField
          type="text"
          fullWidth
          placeholder="Enter a title"
          label="Title"
          sx={{ mb: 1, mt: 1, border: 'none' }}
          name="title"
          value={ title }
          onChange={ onInputChange }
        />

        <TextField
          type="text"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={ 5 }
          name="body"
          value={ body }
          onChange={ onInputChange }
        />
      </Grid2>

      {/* Image gallery */}

      <ImageGallery />
    </Grid2>
  )
}
