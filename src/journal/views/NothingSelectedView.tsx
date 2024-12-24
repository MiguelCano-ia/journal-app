import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Grid2, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid2
			container
			spacing={ 0 }
      direction='column'
			justifyContent='center'
			alignItems='center'
			sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
      className='animate__animated animate__fadeIn animate__faster'
		>
      <Grid2
      >
        <StarBorderIcon sx={{ fontSize: 100, color: 'white' }}  />
      </Grid2>
      <Grid2
      >
        <Typography color="white" variant="h5" >Select or create an entry</Typography>
      </Grid2>
    </Grid2>
  )
}
